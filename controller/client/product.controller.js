module.exports.index=(req, res) => {
    res.render('client/page/products/index.pug', {
        titlepage: "Danh Sách Sản Phẩm "
    });
}
