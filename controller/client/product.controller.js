
module.exports.index= async(req, res) => {
   res.render('client/page/products/index.pug', {
        titlepage: "Danh Sách Sản Phẩm "
    });
}
