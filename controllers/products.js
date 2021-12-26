const products = [];

exports.addProductGET = (req, res, next) => {
  res.render('add-product',{
      pageTitle: "Add product",
      path: '/add-product'
    })
}

exports.addProductPOST = (req, res, next) => {
  products.push({ title: req.body.title});
  console.log(req.body);
  res.redirect('/');
}
exports.allProducts = (req, res, next) => {
  res.render('shop', {
    pageTitle:'Shop', 
    prods: products, 
    docTitle: 'Shop', path:'/'
  });
}