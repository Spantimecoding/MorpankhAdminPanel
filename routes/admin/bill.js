/****************************************************
 * DEPENDENCIES & INITIAL SETUP
 ****************************************************/
const express = require("express")
const router = express.Router()
const path = require("path")
require("dotenv").config()
const axios = require("axios")
const puppeteer = require("puppeteer")
const fs = require("fs")

const {
    draft_model,
    order_model,
    invoice_model,
    alert_model,
    dash_model,
    product_model
} = require("../../config/database")

let orderStatusVar = ""

/****************************************************
 * WHATSAPP and Drive CONFIG (INLINE – AS REQUESTED)
 ****************************************************/
let invoice_file_id = ""


/****************************************************
 * UTILITY FUNCTIONS
 ****************************************************/
function roundTo2(num) {
    return Math.round((num + Number.EPSILON) * 100) / 100
}
async function uploadInvoiceToDrive(filePath, fileName) {
  try {
    // Read PDF file
    const fileBuffer = fs.readFileSync(filePath);

    // Convert to base64
    const fileBase64 = fileBuffer.toString("base64");

    // Send to Google Apps Script
    const response = await axios.post(process.env.GOOGLE_SCRIPT_URL, {
      fileName: fileName,
      fileBase64: fileBase64
    });

    if (!response.data.success) {
      throw new Error(response.data.error || "Drive upload failed");
    }

    // Return fileId for WhatsApp button
    invoice_file_id = response.data.fileId
    return response.data.fileId;

  } catch (error) {
    console.error("Drive Upload Error:", error.message);
    throw error;
  }
}
async function sendWhatsAppInvoice(customerPhone, customerName, totalAmount) {
    return axios.post(
        `https://graph.facebook.com/v22.0/${process.env.WHATSAPP_PHONE_NUMBER_ID}/messages`,
        {
        messaging_product: "whatsapp",
        to: customerPhone,
        type: "template",
        template: {
            name: "order_invoice",
            language: { code: "en" },
            components: [
            // BODY VARIABLES
            {
                type: "body",
                parameters: [
                { type: "text", text: customerName },  // {{1}}
                { type: "text", text: totalAmount }    // {{2}}
                ]
            },

            // BUTTON VARIABLE
            {
                type: "button",
                sub_type: "url",
                index: "0", // first button = 0
                parameters: [
                { type: "text", text: invoice_file_id }
                ]
            }
            ]
        }
        },
        {
        headers: {
            Authorization: `Bearer ${process.env.WHATSAPP_TOKEN}`,
            "Content-Type": "application/json"
        }
        }
    );
    }


/****************************************************
 * ROUTE: GENERATE INVOICE
 ****************************************************/
router.get(`/generate-invoice/:order_ID`, async (req, res) => {

    const order_id = req.params.order_ID
    console.log("Invoice Generation Initiated for Order ID", order_id)

    /******** Puppeteer PDF Generation ********/
    const browser = await puppeteer.launch({
        headless: "new",
        args: ["--no-sandbox", "--disable-setuid-sandbox"]
    })

    const page = await browser.newPage()

    await page.goto(
        `http://localhost:3000/admin/bill`,
        { waitUntil: "networkidle0" }
    )

    await page.waitForSelector(".invoice", { timeout: 10000 })

    const filePath = path.join(
        __dirname,
        `../invoices/invoice-${order_id}.pdf`
    )

    await page.pdf({
        path: filePath,
        format: "A4",
        printBackground: true,
        preferCSSPageSize: true
    })
    const fileId = await uploadInvoiceToDrive(
    filePath,
    `invoice-${order_id}.pdf`
    );

    console.log("Uploaded to Drive. File ID:", fileId);


    await browser.close()

    /******** Send PDF Response ********/
    res.setHeader("Content-Type", "application/pdf")
    res.setHeader(
        "Content-Disposition",
        `attachment; filename=invoice-${order_id}.pdf`
    )
    res.sendFile(filePath)

    /************************************************
     * COMPLETE ORDER CREATION & DB OPERATIONS
     ************************************************/
    draft_model.find({})
        .then(data => {

            let orderData = data[0]?.orderObject

            if (!orderData) {
                throw new Error("Missing draft order data for invoice generation")
            }
            sendWhatsAppInvoice(`91${orderData.customer_num}`,orderData.customer_name,orderData.final_total)

            /******** Line Item Mapping ********/
            const items = orderData.products_info.map(p => ({
                productId: p.barcode,
                name: p.name,
                hsnCode: String(p.hsnCode),
                barcode: Number(p.barcode),
                quantity: p.quantity,
                unitPrice: p.price,
                totalDiscount: roundTo2(p.discount_amount + p.order_level_discount),
                taxableValue: roundTo2(p.discounted_line_total),
                gstRate: p.gst_rate,
                gstAmount: roundTo2(p.gst_amount),
                lineTotal: roundTo2(p.discounted_taxed_line_total)
            }))

            /******** Order Status Logic ********/
            if (orderData.delivery_attributes.address) {
                orderStatusVar = "accepted"
            } else {
                orderStatusVar = "completed"
            }

            /******** Stock Update ********/
            async function stockUpdate() {
                for (let x of orderData.products_info) {
                    const bc = x.barcode
                    await product_model.updateOne(
                        { barcode: bc },
                        { $inc: { stock: -x.quantity } }
                    )
                }
            }

            stockUpdate()

            /******** Order Creation ********/
            order_model.create({

                orderId: orderData.order_id,
                invoiceNumber: orderData.invoice_number,
                customerMobile: orderData.customer_num,
                customerName: orderData.customer_name,
                orderType: orderData.order_type,

                paymentInfo: {
                    paymentStatus: orderData.payment_info.status,
                    paymentMode: orderData.payment_info.method,
                    semiPaidAmount: orderData.payment_info.semi_paid_amount
                },

                items_info: items,

                summary: {
                    subTotal: roundTo2(orderData.gross_sub_total),
                    itemDiscountTotal: roundTo2(orderData.discount_info.item_level),
                    orderDiscountTotal: roundTo2(orderData.discount_info.order_level),
                    gstTotal: roundTo2(orderData.gst.total),
                    taxableTotal: roundTo2(orderData.taxable_total),
                    grandTotal: roundTo2(orderData.final_total)
                },

                delivery_info: {
                    address: orderData.delivery_attributes.address,
                    distance: orderData.delivery_attributes.type,
                    receiverType: orderData.delivery_attributes.receiver,
                    receiverName: orderData.delivery_attributes.receiver_name,
                    receiverNumber: orderData.delivery_attributes.receiver_number
                },

                orderStatus: orderStatusVar

            }).then(

                console.log(`Order with ID - ${order_id} added to Orders Collection`),


                invoice_model.updateOne(
                    {},
                    { $set: { lastInvoiceNumber: orderData.nextInvoiceNumber - 1 } }
                ).then(res => {

                    console.log("Invoice Number Updated")

                    /******** GST & DASHBOARD UPDATES ********/
                    if (orderData.delivery_attributes.type == "intraState") {

                        dash_model.updateMany({}, {
                            $inc: {
                                "brandRevenue.gstToday": orderData.gst.total,
                                "brandRevenue.gstMonth": orderData.gst.total,
                                "brandRevenue.cgstToday": orderData.gst.total / 2,
                                "brandRevenue.sgstToday": orderData.gst.total / 2
                            },
                            $set: {
                                "adminSeshActions.message": `Order : ${orderData.invoice_number} Sold`,
                                "adminSeshActions.messageHead": "Order Sale"
                            }
                        }).then(res => console.log(res))

                    } else if (orderData.delivery_attributes.type == "interState") {

                        dash_model.updateMany({}, {
                            $inc: {
                                "brandRevenue.gstToday": orderData.gst.total,
                                "brandRevenue.gstMonth": orderData.gst.total,
                                "brandRevenue.igstToday": orderData.gst.total
                            },
                            $set: {
                                "adminSeshActions.message": `Order : ${orderData.invoice_number} Sold`,
                                "adminSeshActions.messageHead": "Order Sale"
                            }
                        }).then(res => console.log(res))
                    }

                    /******** ORDER TYPE BASED METRICS ********/
                    if (orderData.order_type == "delivery") {

                        if (orderData.payment_info.status == "paid") {

                            dash_model.updateMany({}, {
                                $inc: {
                                    "brandOrders.totalOrders": 1,
                                    "brandOrders.ordersToday": 1,
                                    "brandOrders.ordersMonth": 1,
                                    "brandOrders.ordersAccepted": 1,
                                    "brandRevenue.revenueTotal": orderData.final_total,
                                    "brandRevenue.revenueToday": orderData.final_total,
                                    "brandRevenue.revenueMonth": orderData.final_total,
                                    "brandRevenue.revenueDelivered":orderData.final_total
                                },
                                $set: {
                                    "adminSeshActions.message": `Order : ${orderData.invoice_number} Sold`,
                                    "adminSeshActions.messageHead": "Order Sale"
                                }
                            }).then(res => console.log(res))

                        } else if (orderData.payment_info.status == "payLater") {

                            dash_model.updateMany({}, {
                                $inc: {
                                    "brandOrders.totalOrders": 1,
                                    "brandOrders.ordersToday": 1,
                                    "brandOrders.ordersMonth": 1,
                                    "brandOrders.ordersAccepted": 1,
                                    "brandRevenue.ordersPayLater": 1,
                                    "brandRevenue.revenueOutstanding":orderData.final_total
                                },
                                $set: {
                                    "adminSeshActions.message": `Order : ${orderData.invoice_number} Sold`,
                                    "adminSeshActions.messageHead": "Order Sale"
                                }
                            }).then(res => console.log(res))

                        } else if (orderData.payment_info.status == "semiPaid") {

                            dash_model.updateMany({}, {
                                $inc: {
                                    "brandOrders.totalOrders": 1,
                                    "brandOrders.ordersToday": 1,
                                    "brandOrders.ordersMonth": 1,
                                    "brandOrders.ordersAccepted": 1,
                                    "brandRevenue.ordersSemiPay": 1,
                                    "brandRevenue.revenueOutstanding":(orderData.final_total - orderData.payment_info.semi_paid_amount)
                                },
                                $set: {
                                    "adminSeshActions.message": `Order : ${orderData.invoice_number} Sold`,
                                    "adminSeshActions.messageHead": "Order Sale"
                                }
                            }).then(res => console.log(res))
                        }

                    } else {

                        if (orderData.payment_info.status == "paid") {

                            dash_model.updateMany({}, {
                                $inc: {
                                    "brandOrders.totalOrders": 1,
                                    "brandOrders.ordersToday": 1,
                                    "brandOrders.ordersMonth": 1,
                                    "brandOrders.ordersInStoreToday": 1,
                                    "brandRevenue.revenueTotal": orderData.final_total,
                                    "brandRevenue.revenueToday": orderData.final_total,
                                    "brandRevenue.revenueMonth": orderData.final_total,
                                    "brandRevenue.revenueInStore":orderData.final_total
                                },
                                $set: {
                                    "adminSeshActions.message": `Order : ${orderData.invoice_number} Sold`,
                                    "adminSeshActions.messageHead": "Order Sale"
                                }
                            }).then(res => console.log(res))

                        } else if (orderData.payment_info.status == "payLater") {

                            dash_model.updateMany({}, {
                                $inc: {
                                    "brandOrders.totalOrders": 1,
                                    "brandOrders.ordersToday": 1,
                                    "brandOrders.ordersMonth": 1,
                                    "brandOrders.ordersInStoreToday": 1,
                                    "brandRevenue.ordersPayLater": 1,
                                    "brandRevenue.revenueOutstanding":orderData.final_total
                                },
                                $set: {
                                    "adminSeshActions.message": `Order : ${orderData.invoice_number} Sold`,
                                    "adminSeshActions.messageHead": "Order Sale"
                                }
                            }).then(res => console.log(res))

                        } else if (orderData.payment_info.status == "semiPaid") {

                            dash_model.updateMany({}, {
                                $inc: {
                                    "brandOrders.totalOrders": 1,
                                    "brandOrders.ordersToday": 1,
                                    "brandOrders.ordersMonth": 1,
                                    "brandOrders.ordersInStoreToday": 1,
                                    "brandRevenue.ordersSemiPay": 1,
                                    "brandRevenue.revenueOutstanding":(orderData.final_total - orderData.payment_info.semi_paid_amount)
                                },
                                $set: {
                                    "adminSeshActions.message": `Order : ${orderData.invoice_number} Sold`,
                                    "adminSeshActions.messageHead": "Order Sale"
                                }
                            }).then(res => console.log(res))
                        }
                    }
                })
            )
        })
})

/****************************************************
 * ROUTE: BILL PAGE RENDER
 ****************************************************/
router.get("/", (req, res) => {
    draft_model.find({})
        .then(data => {
            const orderData = data[0].orderObject
            res.render("admin/bill", {
                "display": "Order Confirmation Page",
                orderData
            })
        })
})

module.exports = router
