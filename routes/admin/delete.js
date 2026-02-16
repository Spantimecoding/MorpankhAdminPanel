const express = require("express")
const {product_model,dash_model} = require("../../config/database")
const router = express.Router()

router.get("/:id", async (req,res)=>{
    try{

        const id = req.params.id

        if(!id){
            return res.status(400).send("Invalid Product ID")
        }

        const result = await product_model.deleteOne({id:id})

        if(result.deletedCount === 0){
            return res.status(404).send("Product not found")
        }

        await dash_model.updateMany({},{
            $inc:{"adminSeshActions.productDeleted":1},
            $set:{
                "adminSeshActions.message":`Product : ${id} Deleted`,
                "adminSeshActions.messageHead":"Product Deletion"
            }
        })

        console.log("Product Deleted ID : ",id)
        console.log(result)

        return res.redirect("../")

    }catch(err){
        console.error("Product Delete Route Error:",err)
        return res.status(500).send("Internal Server Error")
    }
})

module.exports = router
