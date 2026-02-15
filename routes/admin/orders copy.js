const express = require("express")
const router = express.Router()
router.get("/", async(req,res)=>{
    try{
        res.render("admin/orders",{"display":"Order History"})

    }catch(err){
        console.log("Some Error Occured")
        console.log(err)
    }
})
module.exports = router