const express = require("express");
const router = express.Router();
const { product_model, alert_model } = require("../../config/database");

router.get("/:id", async (req, res) => {
    try {
        const productId = req.params.id;

        if (!productId) {
            return res.status(400).send("Invalid product ID");
        }

        // Get alert safely
        const alertDoc = await alert_model.findOne().lean();
        const new_alert = alertDoc ? alertDoc.updateAlert : false;

        // Reset alert flag
        if (alertDoc) {
            await alert_model.updateOne({}, { $set: { updateAlert: false } });
        }

        // Get product
        const data = await product_model.find({ id: productId }).lean();

        if (!data) {
            return res.status(404).send("Product not found");
        }

        return res.render("admin/products/product_show", {
            display: data[0].name,
            data,
            userDP:req.session.adminDP,
            new_alert
        });

    } catch (err) {
        console.error("Product Show Route Error:", err);
        return res.status(500).send("Internal Server Error");
    }
});

module.exports = router