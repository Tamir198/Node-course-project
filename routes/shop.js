const express = require('express');
const router = express.Router();

const productsController = require('../controllers/products')

router.get('/', productsController.allProducts);

router.get('/cart', productsController.showCart);

router.get('/checkout', productsController.checkout);

router.get('/product-list', productsController.productList);







module.exports = router;
