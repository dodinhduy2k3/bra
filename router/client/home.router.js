const router = require("express");

express = express.Router()

const controller = require("../../controller/client/home.controller")


router.get("/",controller.index)

module.exports= router