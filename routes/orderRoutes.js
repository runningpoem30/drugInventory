const express = require('express');
const router = express.Router();

const { orderPlaced, drugUsed } = require('../controllers/orderController');

// Route to place an order to Vendor (Increases drug quantity)
router.put('/order', orderPlaced);

// Route to record drug usage by a patient (Decreases drug quantity)
router.post('/use', drugUsed);

module.exports = router;
