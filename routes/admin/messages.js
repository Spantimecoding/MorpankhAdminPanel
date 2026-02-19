const express = require("express")
const router = express.Router()
const path = require("path")
require("dotenv").config()
router.get("/", async (req,res)=>{
    try{
         return res.render("admin/messages",{display:"Communications"})
    }catch(err){
        console.dir("Error while Loading Page")
        console.dir(err)

    }
})
router.post("/sendMessage", async(req,res)=>{
    try{
    console.log(req.body)
    res.redirect("/admin/messages")

    }catch(err){
        console.dir("Error In Sending Whatsapp Message")
        console.dir(err)

    }
})
module.exports = router