const express = require("express")
const router = express.Router()
const {product_model,dash_model} = require("../../config/database")
const confirmation = require("./add")




//Routers - 
router.use("/products/edit",require("./product_show"))
router.use("/products/add",require("./add"))
router.use("/products",require("./products"))
router.use("/users",require("./users"))
router.use("/orders",require("./orders"))
router.use("/bill",require("./bill"))
router.use("/checkout",require('./checkout'))
router.use("/products/delete",require("./delete"))
router.use("/products/update",require("./update"))

//Render Dashboard
router.get("/", async (req,res)=>{
    try{
        //Getting Dashboard Info from Database -
        const data = await dash_model.find({})
        const dashData = data[0]
        async function checkDateAndresetCounter() {
        const now = new Date()

        const year = now.getFullYear()
        const month = String(now.getMonth() + 1).padStart(2, "0")
        const day = String(now.getDate()).padStart(2, "0")


        const today = `${year}-${month}-${day}`
        const thisMonth = `${year}-${month}`
        if(dashData.currentDate === today){
            return
        }else if(dashData.currentDate !== today){
            await dash_model.updateMany({},{$set:{
                "brandOrders.ordersToday":0,
                "brandOrders.ordersDeliveredToday":0,
                "brandOrders.ordersInstoreToday":0,
                "brandOrders.ordersReturnedToday":0,
                "brandRevenue.revenueToday":0,
                "brandRevenue.gstToday":0,
                "brandRevenue.cgstToday":0,
                "brandRevenue.sgstToday":0,
                "brandRevenue.igstToday":0,
                "adminSeshActions.productAdded":0,
                "adminSeshActions.productDeleted":0,
                "adminSeshActions.productUpdated":0,
                "adminSeshActions.message":"",
                "adminSeshActions.messageHead":"",
                currentDate : today
            }})
        }
        if(dashData.currentMonth !== thisMonth){
            await dash_model.updateMany({},{$set:{
                "brandOrders.ordersMonth":0,
                "brandRevenue.revenueMonth":0,
                "brandRevenue.gstMonth":0,
                currentMonth : thisMonth
            }})

        }
        
        }
        checkDateAndresetCounter()  
        dashData.brandStock.total = await product_model.countDocuments()
        dashData.brandStock.inStock = await product_model.countDocuments({stock:{$gt:0}})
        dashData.brandStock.outStock = await product_model.countDocuments({stock:0})


        res.render("admin/dashboard",{"display":" Dashboard",dashData})
        console.log("Rendered : Admin-Dashboard")
    }catch(err){
        console.log("Error : Get-Dashboard Request")
        console.log(err)
    }
    
})

//Exports - 
module.exports = router