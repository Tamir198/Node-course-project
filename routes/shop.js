const express = require('express');
const router = express.Router();

const productsController = require('../controllers/products');

router.get('/', productsController.allProducts);

router.get('/cart', productsController.showCartGet);
router.post('/cart', productsController.showCartPost);

router.get('/checkout', productsController.checkout);
router.get('/product-list', productsController.productList);
router.get('/orders', productsController.allOrders)
router.get('/products/:productId', productsController.productDetails);

module.exports = router;