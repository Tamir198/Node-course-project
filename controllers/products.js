const Product = require('../models/product')

exports.addProductGET = (req, res, next) => {
  res.render('add-product',{
      pageTitle: "Add product",
      path: '/add-product'
    })
}

exports.addProductPOST = (req, res, next) => {
  const product = new Product(req.body.title);
  product.saveCurrentProduct();
  res.redirect('/');
}

exports.allProducts = (req, res, next) => {
  res.render('shop', {
    pageTitle:'Shop', 
    prods: Product.getAllProducts(), 
    docTitle: 'Shop', path:'/'
  });
}