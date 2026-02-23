const express = require("express")
const {product_model,dash_model} = require("../../config/database")
const router = express.Router()

router.get("/:id", async (req,res)=>{
    try{

        const id = req.params.id

        if(!id){
            return res.status(400).send("Invalid Product ID")
        }

        if(req.session.loginType == "admin"){
            const result = await product_model.deleteOne({id:id})
            
            if(result.deletedCount === 0){
                return res.status(404).send("Product not found")
            }

            console.log("Product Deleted ID : ",id)
            console.log(result)

            return res.redirect("/admin/products/allProducts?page=1&&search=all")

        }else{
            return res.redirect(`/admin/products/edit/${id}`)

        }


    }catch(err){
        console.error("Product Delete Route Error:",err)
        return res.status(500).send("Internal Server Error")
    }
})

module.exports = router
