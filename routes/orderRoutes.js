// productRoutes.js
const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');

// GET all products
// router.get('/order', orderController.validateOrder);

// POST a new product
router.post('/api', orderController.validateOrder);

module.exports = router;
