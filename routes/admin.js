const express = require('express');
const router = express.Router();

const productsController = require('../controllers/products');
const adminController = require('../controllers/admin');

router.get('/add-product', productsController.addProductGET);
router.post('/add-product', productsController.addProductPOST);
router.get('/admin-products', adminController.adminProducts);
router.get('/edit-product/:productId', productsController.editProductGET)

module.exports =  router;

