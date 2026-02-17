//express connection
const express = require("express")
const session = require("express-session");
const app = express()
require("dotenv").config()

//Mongoose Connection
const mongoose = require("./config/database")

//express middleware
app.set("view engine","ejs")
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.set("trust proxy", 1);
app.use(session({
    name: "sid",
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 1000 * 60 * 60
    }
}));
app.get("/", (req, res) => {
  res.redirect("/admin");
})
app.use("/admin",require("./routes/admin/index"))
app.use(express.static("public"))

//Exports - 
module.exports = app
