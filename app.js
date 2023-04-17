const exprees = require("express");
const bodyParser = require("body-parser");
const cors=require('cors');
const app = exprees();
app.use(cors());
const sellerRoute = require("./routes/seller");
const userRoute = require("./routes/user");
const productRoute = require("./routes/product");
const cartController = require("./routes/cart");
const orderController=require("./routes/order")
app.use(bodyParser.json());
app.use("/api/seller", sellerRoute);
app.use("/api/user", userRoute);
app.use("/api/product", productRoute);
app.use("/api/cart", cartController);
app.use("/api/order",orderController);
module.exports = app;
