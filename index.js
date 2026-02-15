const app = require("./app")
require("dotenv").config()
//Server Start
const {connectDB} = require("./config/database")
const PORT = process.env.PORT || 3000;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("Server running");
  });
}).catch(err => {
  console.log("DB connection failed:", err);
});