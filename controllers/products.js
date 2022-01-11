const Product = require('../models/product');

exports.addProductGET = (req, res, next) => {
  res.render('admin/add-product', {
    pageTitle: "Add product",
    path: '/add-product'
  })
}

exports.addProductPOST = (req, res, next) => {
  const body = req.body;
  const product = new Product(
    body.title,
    body.imgUrl,
    body.description,
    body.price,
  );
  product.saveCurrentProduct();
  res.redirect('/shop/product-list');
}

//TODO: check why this brings page not found
exports.productDetails = async (req, res, next) => {
  await Product.getProductById(
    req.params.productId,
    (product) => {
      res.render('shop/product-info', {
        path: '/product-list',
        pageTitle: 'Product Info',
        product: product
      })
    }
  );
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


exports.productList = (req, res, next) => {
  Product.getAllProducts((products => {
    res.render('shop/product-list', {
      pageTitle: 'productList',
      path: '/product-list',
      prods: products,
    });
  }))
}


exports.showCart = (req, res, next) => {
  Product.getAllProducts((products => {
    res.render('shop/cart', {
      pageTitle: 'Cart',
      path: '/cart'
    });
  }))
}

//TODO keep this and render checkout later
exports.checkout = (req, res, next) => {
  Product.adminProducts((products => {
    res.render('admin/admin-products', {
      pageTitle: 'productList',
      path: '/product-list'
    });
  }))
}

exports.allOrders = (req, res, next) => {
  Product.getAllProducts((products => {
    res.render('shop/orders', {
      pageTitle: 'Prders',
      path: '/orders'
    });
  }))
}






