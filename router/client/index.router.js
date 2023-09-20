const home_controller = require("../../controller/client/home.controller")
const product_controller = require("../../controller/client/product.controller")

module.exports=(app)=>{
    app.get("/",home_controller.index)
    
    app.get("/product",product_controller.index)

}