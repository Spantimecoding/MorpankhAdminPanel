const express = require("express")
const bwip = require("bwip-js")
const file = require("fs")
const {product_model,dash_model,alert_model} = require("../../config/database")
const router = express.Router()
const { v4: uuidv4 } = require("uuid")
router.use(express.urlencoded({ extended: true }))
router.get("/", async (req,res)=>{
    try{
        res.render("admin/products/add",{"display":"Add Product"})
    }catch(err){
        console.log("Some Error Occured")
        console.log(err)
    }
})
module.exports = router
router.post("/data", async (req,res)=>{
    function generateBarcodeNum() {
    const time = Date.now(); // milliseconds
    const rand = Math.floor(Math.random() * 1000); // 0–999
    return `${time}${rand}`;
    }
    const barcodeNum = generateBarcodeNum()
    async function generateBarcodeImage(code) {
    const png = await bwip.toBuffer({
        bcid: 'code128',       // Barcode type
        text: code,            // Data
        scale: 4,
        height: 25, 
        includetext: true,
        textxalign: 'center',
    });
    return png
    }
    const barcodeImage = await generateBarcodeImage(barcodeNum)
    req.session.confirmation = `Name : ${req.body.name}`
    //Confirmation Message Sending - 
    //Database Addition Code - 
    //Data Organisation
    const new_id = uuidv4()
    let attribute_object = {}
    category = req.body.category
    console.log(req.body)
    //Attribute Customisation based on Category
    if(category == "readymade"){
          attribute_object = {  
            "readymadeLength":req.body.readymadeLength,
            "readymadeFit":req.body.readymadeFit,
            "readymadeDesign":req.body.readymadeDesign,
            "readymadeSleeve":req.body.readymadeSleeve,
            "readymadeSize":req.body.readymadeSize,
            "readymadeType":req.body.readymadeType,
            "readymadeFabricType" : req.body.readymadeFabricType,
            "readymadeNeckline" : req.body.readymadeNeckline
        }
        if(req.body.readymadeType == "blouseStitched"){
            attribute_object.readymadeBlouseLining = req.body.readymadeBlouseLining
            attribute_object.readymadeBlouseClosure = req.body.readymadeBlouseClosure
            attribute_object.readymadeBlouseBack = req.body.readymadeBlouseBack

        }
         
    }else if(category == "sarees"){
        attribute_object = {
                "sareeLength":req.body.sareeLength,
                "sareeWidth":req.body.sareeWidth,
                "sareeDesign":req.body.sareeDesign,
                "blouseIncluded":req.body.blouseIncluded,
                "sareeFabricType" : req.body.sareeFabricType
            }
        if(req.body.blouseIncluded == "yes"){
            attribute_object.blouseDesign = req.body.blouseDesign
            attribute_object.blouseType = req.body.blouseType
            attribute_object.blouseMaterial = req.body.blouseMaterial
            attribute_object.blouseFabricType = req.body.blouseFabricType

            if(req.body.blouseType == "unstitched"){
                attribute_object.blouseLength = req.body.blouseLength
                attribute_object.blouseLining = req.body.blouseLining

            }else if(req.body.blouseType == "semi-stitched"){
                attribute_object.blouseLength = req.body.blouseLength
                attribute_object.blouseChest = req.body.blouseChest
                attribute_object.blouseLining = req.body.blouseLining
                attribute_object.blouseSleeve = req.body.blouseSleeve
            }else if(req.body.blouseType == "stitched"){
                attribute_object.blouseSize = req.body.blouseSize
                attribute_object.blouseLining = req.body.blouseLining
                attribute_object.blouseSleeve = req.body.blouseSleeve
                attribute_object.blouseClosure = req.body.blouseClosure
                attribute_object.blouseBack = req.body.blouseBack

            }
        }  

    }else if(category == "blouse"){
        attribute_object = {
            "blouseDesign":req.body.blouseDesign,
            "blouseType":req.body.blouseType,
            "blouseFabricType" : req.body.blouseFabricType,
            "blouseLining":req.body.blouseLining
        }
         if(req.body.blouseType == "unstitched"){
                attribute_object.blouseLength = req.body.blouseLength
            }else if(req.body.blouseType == "semi-stitched"){
                attribute_object.blouseLength = req.body.blouseLength
                attribute_object.blouseChest = req.body.blouseChest
                attribute_object.blouseSleeve = req.body.blouseSleeve
            }
    }else if( category == "wraps"){
        attribute_object = {
            "wrapType":req.body.wrapType,
            "wrapLength":req.body.wrapLength,
            "wrapWidth":req.body.wrapWidth,
            "wrapDesign":req.body.wrapDesign,
            "wrapFabricType" : req.body.wrapFabricType 
        }
    }else if(category == "jewellery"){
        attribute_object = {
            "jewelleryType":req.body.jewelleryType,
            "jewelleryCraft":req.body.jewelleryCraft,
            "jewelleryWeight":req.body.jewelleryWeight
        }
    }

    // Database Item Creation - 
    product_model.create({
        name:req.body.name,
        id:new_id,
        barcode:barcodeNum,
        hsnCode:req.body.hsnCode,
        category:req.body.category,
        description:req.body.description,
        price:req.body.price,
        material:req.body.material,
        stock:req.body.stock,
        images:[req.body.image1,req.body.image2,req.body.image3,req.body.image4,req.body.image5,req.body.image6],
        attributes:attribute_object
    })
    .then(res=>{
        console.log("New product successfully added to Database")
            dash_model.updateMany({},{
                $inc:{"adminSeshActions.productAdded":1},
                $set:{
                    "adminSeshActions.message":"New Product Added",
                    "adminSeshActions.messageHead":"Product Addition"
                }
            })
        .then(res=>{
            console.log(res)
        })
        console.log(res)
    })
    .catch(err=>{
        console.log("Error in adding new product to database")
        console.log(err)
    })

    res.writeHead(200, {
      'Content-Type': 'image/png',
      'Content-Disposition': `attachment; filename="barcode-${barcodeNum}.png"`,
    });

    return res.end(barcodeImage);


})