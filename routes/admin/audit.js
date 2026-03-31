const express = require("express")
const {audit_model} = require("../../config/database")
const router = express.Router()
router.get("/",async(req,res)=>{
    try{
        const auditData = await audit_model.find({})
        res.render("admin/audit",{
        "display":"Audit Log",
        userDP:req.session.adminDP,
        auditData})

    }catch(err){
        console.log("Some Error Occured",err)
        return res.status(500).send("Internal Server Error");
    }
})
module.exports=router