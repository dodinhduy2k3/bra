const Product = require("../../models/product.model")
module.exports.index= async(req, res) => {
    const products = await Product.find();
        
        console.log(products)
        const newproduct = products.map(item=>{
            item.priceNew= ((item.price * (100 - item.discountPercentage))/100).toFixed(0)
            return item
        })

        console.log(newproduct)
    res.render('client/page/products/index.pug', {
        titlepage: "Danh Sách Sản Phẩm ",
        products: products
    });
}
