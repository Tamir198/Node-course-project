const express = require('express');
const router = express.Router();

const productsController = require('../controllers/products');

router.get('/add-product', productsController.addProductGET);
router.post('/add-product', productsController.addProductPOST);
router.get('/admin-products', productsController.adminProducts);

module.exports =  router;

