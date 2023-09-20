const mongoose = require("mongoose")

const productShema = new mongoose.Schema({
    "title": String,
    "description": String,
    "price": Number,
    "discountPercentage": Number,
    "stock": Number,
    "thumbnail": String,
    "status": String,
    "position": Number,
    "deleted": Boolean
})

const Product = mongoose.model("Products", productShema, "products")

module.exports = Product;