const express = require("express")
const router = express.Router()
router.get("/", async(req,res)=>{
    try{
          res.render("admin/users",{"display":"Users"})

    }catch(err){
        console.log("Some Error Occured")
        console.log(err)
    }
})
module.exports = router