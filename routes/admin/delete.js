const express = require("express")
const {product_model,dash_model} = require("../../config/database")
const router = express.Router()
router.get("/:id",(req,res)=>{
    product_model.deleteOne({id:req.params.id})
    .then(result =>{
         dash_model.updateMany({},{
                $inc:{"adminSeshActions.productDeleted":1},
                $set:{
                    "adminSeshActions.message":`Product : ${req.params.id} Deleted`,
                    "adminSeshActions.messageHead":"Product Deletion"
                }
            }).then(res=>{
                console.log(res)
            })
        res.redirect("../")
        console.log("Product Deleted ID : ",req.params.id)
        console.log(result)

    })
    .catch(err=>{
        console.log(err)
    })
    
})
module.exports = router