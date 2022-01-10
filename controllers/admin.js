const Product = require('../models/product');

exports.adminProducts =  (req, res, next) => {
  Product.getAllProducts((products => {
    res.render('admin/admin-products', {
      pageTitle: 'productList',
      path: '/admin-products',
      prods: products,
    });
  })
)}