const Product = require('../models/product')

exports.addProductGET = (req, res, next) => {
  res.render('admin/add-product', {
    pageTitle: "Add product",
    path: '/add-product'
  })
}

exports.addProductPOST = (req, res, next) => {
  const product = new Product(req.body.title);
  product.saveCurrentProduct();
  res.redirect('/shop');
}

exports.allProducts = (req, res, next) => {
  Product.getAllProducts((products => {
    res.render('shop/product-list', {
      pageTitle: 'Shop',
      prods: products,
      docTitle: 'Shop',
      path: '/shop'
    });
  }))
}

exports.showCart =  (req, res, next) => {
  Product.getAllProducts((products => {
    res.render('shop/cart', {
      pageTitle: 'Cart',
      path: '/cart'
    });
  }))
}

exports.checkout =  (req, res, next) => {
  Product.getAllProducts((products => {
    res.render('shop/product-list', {
      pageTitle: 'productList',
      path: '/product-list'
    });
  }))
}

exports.productList =  (req, res, next) => {
  Product.getAllProducts((products => {
    res.render('shop/product-list', {
      pageTitle: 'productList',
      path: '/product-list',
      prods: products,
    });
  }))
}

exports.checkout =  (req, res, next) => {
  Product.adminProducts((products => {
    res.render('admin/admin-products', {
      pageTitle: 'productList',
      path: '/product-list'
    });
  }))
}

exports.adminProducts =  (req, res, next) => {
    res.render('admin/admin-products', {
      pageTitle: 'productList',
      path: '/admin-products'
    });
}



