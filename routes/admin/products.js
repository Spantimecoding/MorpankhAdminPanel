const express = require("express")
const bwip = require("bwip-js")
const {product_model} = require("../../config/database")
const router = express.Router()
router.get("/regenerate/:barcode", async (req, res) => {
  const barcode = req.params.barcode;

  if (!barcode || barcode.length > 50) {
    return res.status(400).json({ error: "Invalid barcode" });
  }

  try {
    const png = await bwip.toBuffer({
      bcid: "code128",
      text: barcode,
      scale: 2,
      height: 14,
      includetext: true,        
      textxalign: "center",
    });

    res.writeHead(200, {
      "Content-Type": "image/png",
      "Content-Disposition": `attachment; filename="barcode-${barcode}.png"`,
    });
    console.dir("Barcode Regeneration Status : Successfull")

    return res.end(png);

  } catch (err) {
    console.error("Barcode Regeneration Failed:", err);
    return res.status(500).json({ error: "Barcode generation failed" });
  }
});

// Helper: Build Mongo Query
function buildQuery(search) {
    if (!search || search === "all") {
        return {};
    }

    const split = search.split("-");
    const dbQuery = {};

    const Qmap = {
        stk: "stock",
        nm: "name",
        cat: "category",
        hsn: "hsnCode",
        bd: "barcode"
    };

    for (let i = 0; i < split.length; i += 2) {
        const key = split[i];
        const value = split[i + 1];

        const dbField = Qmap[key];
        if (!dbField || !value) continue;

        dbQuery[dbField] = value;
    }

    return dbQuery;
}

// Route
router.get("/allProducts", async (req, res) => {
    try {
        const search = req.query.search || "";
        let page = parseInt(req.query.page) || 1;
        const limit = 20;

        if (page < 1) page = 1;

        const skip = (page - 1) * limit;

        const dbQuery = buildQuery(search);

        const products = await product_model
            .find(dbQuery)
            .skip(skip)
            .limit(limit)
            .lean(); // cleaner output

        return res.render("admin/products/allProducts", {
            display: "Products",
            data: products,
            currentPage: page
        });

    } catch (err) {
        console.error("Product Page Render Error:", err);
        return res.status(500).render("error-page", {
            message: "Something went wrong."
        });
    }
});
router.get("/barcodePrint",async(req,res)=>{
     try {
        const search = req.query.search || "";
        let page = parseInt(req.query.page) || 1;
        const limit = 20;

        if (page < 1) page = 1;

        const skip = (page - 1) * limit;

        const dbQuery = buildQuery(search);

        const products = await product_model
            .find(dbQuery)
            .skip(skip)
            .limit(limit)
            .lean(); // cleaner output

        return res.render("barcode_print", {products});

    } catch (err) {
        console.error("Barcode Print Page Error:", err);
        return res.status(500).render("error-page", {
            message: "Something went wrong."
        });
    }


})
//Exports - 
module.exports = router

