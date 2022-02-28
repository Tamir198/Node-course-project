const express = require('express');
const router = express.Router();

const startingPageController = require('../controllers/startingPage');

router.get('/', startingPageController.startingPage);

module.exports = router;
