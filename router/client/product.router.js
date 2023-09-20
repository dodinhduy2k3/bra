
const router = require("express");

express = express.Router()

const controller = require("../../controller/client/products.controller")


router.get("/",controller.index)

module.exports= router