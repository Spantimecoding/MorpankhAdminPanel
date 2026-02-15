const express = require("express")
const bwip = require("bwip-js")
const {product_model} = require("../../config/database")
const router = express.Router()
router.get("/regenerate/:barcode",async (req,res)=>{
    const barcode = req.params.barcode
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
        const barcodeImage = await generateBarcodeImage(barcode)
        
        res.writeHead(200, {
        'Content-Type': 'image/png',
        'Content-Disposition': `attachment; filename="barcode-${barcode}.png"`,
        });

        return res.end(barcodeImage);
})
router.get("/", async (req,res)=>{
    try{
        const search = req.query.search || ""
        let page = parseInt(req.query.page) || 1;
        const limit = 20;
        console.log(search)
        function buildQuery(data) {
            const split = data.split("-");
            const dbQuery = {};

            const Qmap = {
                stk: "stock",
                nm: "name",
                cat: "category",
                hsn: "hsnCode",
                bd: "barcode",
                all:{}
            };
            for (let i = 0; i < split.length; i += 2) {
                const key = split[i];
                const value = split[i + 1];

                const dbField = Qmap[key];
                if (!dbField) continue;
                dbQuery[dbField] = value;
            }

            console.log(dbQuery)
            const skip = (page - 1) * limit;
            if(page < 1){
                page = 1
            }
            product_model.find(dbQuery)
            .skip(skip)
            .limit(limit)
            .then(data=>{
                console.log(data)
                res.render("admin/products/allProducts",{"display":"Products",data})

        })
        }
        buildQuery(search)
    }
    catch(err){
        console.log("Some Error Occured")
        console.log(err)
    }
})
//Exports - 
module.exports = router
