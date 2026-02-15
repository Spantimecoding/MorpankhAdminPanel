const express = require("express")
const router = express.Router()
let new_alert = false
const {product_model,alert_model} = require("../../config/database")
router.get("/:id", async (req,res)=>{
    console.log(req.params.id)
    const alert = await alert_model.find()
    new_alert = alert[0].updateAlert
    await alert_model.updateOne({},{$set:{updateAlert:false}})
    console.log(new_alert)
    product_model.find({id:req.params.id}).then(data=>{
        console.log(data)
        if(data && data.length > 0) {
            res.render("admin/products/product_show",{"display":data[0].name,data,new_alert})

        } else {
            res.status(404).send("Product not found")
        }
    })
})
module.exports = router