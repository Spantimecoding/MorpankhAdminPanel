const express = require("express")
const router = express.Router()
const {order_model,dash_model} = require("../../config/database")
router.post("/updateStatus",async (req,res)=>{
    console.log(req.body)
    const update = req.body
    res.json({success: true, message: "Order completed successfully"})
    console.log("hfbjhdfvbhvbhvbyvbydbvbfhyvbyhfbgvbfhygvbyf - ",update.paymentStatus)
    order_model.updateOne({orderId:update.orderID},{$set:{orderStatus:update.orderStatus,"paymentInfo.paymentStatus":update.paymentStatus}})
    .then(res=>{
        console.log(res)
        console.log(`Previous Payment - ${update.prevPayment},
            New Payment - ${update.paymentStatus},
            psts change - ${update.pstsChange},
            osts Change - ${update.ostsChange},
            semi Amount - ${update.paymentRemain}
            new Order Status - ${update.orderStatus}`)
        if(update.pstsChange == true && update.paymentStatus == "paid" && update.prevPayment != "paid"){
            if(update.prevPayment == "semiPaid"){
                dash_model.updateMany({},{
                    $inc:{"brandRevenue.revenueTotal":update.orderTotal,
                        "brandRevenue.revenueToday":update.orderTotal,
                        "brandRevenue.revenueMonth":update.orderTotal,
                        "brandRevenue.revenueOutstanding":-(update.orderTotal - update.paymentRemain),
                        "brandRevenue.ordersSemiPay":-1},
                    $set:{
                        "adminSeshActions.message":"",
                        "adminSeshActions.messageHead":"Order Payment Completion"
                    }
                })
            .then(res=>{
                console.log(res)
            })
        }else if(update.prevPayment == "payLater"){
                dash_model.updateMany({},{
                        $inc:{"brandRevenue.revenueTotal":update.orderTotal,
                            "brandRevenue.revenueToday":update.orderTotal,
                            "brandRevenue.revenueMonth":update.orderTotal,
                            "brandRevenue.revenueOutstanding":-update.orderTotal,
                            "brandRevenue.revenueDelivered":update.final_total,
                            "brandRevenue.ordersPayLater":-1},
                        $set:{
                            "adminSeshActions.message":"",
                            "adminSeshActions.messageHead":"Order Payment Completion"
                        }
                    })
                .then(res=>{
                    console.log(res)
                })

            }
        }
        if(update.orderStatus == "packaged" && update.ostsChange == true){
            dash_model.updateMany({},{
                    $inc:{"brandOrders.ordersPackaged":1,"brandOrders.ordersAccepted":-1},
                    $set:{
                        "adminSeshActions.message":"",
                        "adminSeshActions.messageHead":"Order : Packaged"
                    }
                })
            .then(res=>{
                console.log(res)
            })
        }else if(update.orderStatus == "dispatched" && update.ostsChange == true){
            dash_model.updateMany({},{
                $inc:{"brandOrders.ordersDispatched":1,"brandOrders.ordersPackaged":-1},
                $set:{
                    "adminSeshActions.message":"",
                    "adminSeshActions.messageHead":"Order : Dispatched"
                }
            })
        .then(res=>{
            console.log(res)
        })
        }else if(update.orderStatus == "completed" && update.ostsChange == true){
            dash_model.updateMany({},{
                    $inc:{"brandOrders.ordersDeliveredToday":1,
                        "brandOrders.ordersDispatched":-1},
                    $set:{
                        "adminSeshActions.message":"",
                        "adminSeshActions.messageHead":"Order Delivered"
                    }
                })
            .then(res=>{
                console.log(res)
            })

        }
    })



})
router.get("/orderPage/:orderID",(req,res)=>{
    const id = req.params.orderID
    order_model.find({orderId:id})
    .then(data=>{
        const orderData = data[0]
        res.render("admin/order_show",{"display":`Order : ${orderData.invoiceNumber}`,orderData})
    })

})
router.get("/", async(req,res)=>{
    try{
        function getDateRange(type) {
            const now = new Date();
            let start, end;

            const startOfDay = d =>
                new Date(d.getFullYear(), d.getMonth(), d.getDate());

            if (type === "tdy") {
                start = startOfDay(now);
                end = new Date(start);
                end.setDate(end.getDate() + 1);
            }

            if (type === "yst") {
                end = startOfDay(now);
                start = new Date(end);
                start.setDate(start.getDate() - 1);
            }

            if (type === "wk") {
                const day = now.getDay() || 7; // make Sunday = 7
                start = startOfDay(now);
                start.setDate(start.getDate() - (day - 1));
                end = new Date(start);
                end.setDate(end.getDate() + 7);
            }

            if (type === "mth") {
                start = new Date(now.getFullYear(), now.getMonth(), 1);
                end = new Date(now.getFullYear(), now.getMonth() + 1, 1);
            }

            if (!start || !end) return null;

            return { $gte: start, $lt: end };
            }

        const search = req.query.search || ""
        let page = parseInt(req.query.page) || 1;
        const limit = 30;
        console.log(search)
        function buildQuery(data) {
            const split = data.split("-");
            const dbQuery = {};

            const Qmap = {
                tl: "summary.grandTotal",
                nm: "customerName",
                osts: "orderStatus",
                psts: "paymentInfo.paymentStatus",
                pm: "paymentInfo.paymentMode",
                ot: "orderType",
                dt:"date",
                all:{}
            };

            for (let i = 0; i < split.length; i += 2) {
                const key = split[i];
                const value = split[i + 1];

                const dbField = Qmap[key];
                if (!dbField) continue;
                if(key == "dt"){
                    const range = getDateRange(value)
                    if(range){
                        dbQuery[dbField] = range
                    }
                    continue
                }
            

                dbQuery[dbField] = value;
            }

            console.log(dbQuery)
            const skip = (page - 1) * limit;
            if(page < 1){
                page = 1
            }
            order_model.find(dbQuery)
            .skip(skip)
            .limit(limit)
            .then(data=>{
                console.log(data)
                res.render("admin/orders",{"display":"Order History",data})

        })
        }
        buildQuery(search)

    }catch(err){
        console.log("Some Error Occured")
        console.log(err)
    }
})
module.exports = router