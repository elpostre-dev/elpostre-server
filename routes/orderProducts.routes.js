const express = require('express')
const orderProdController = require('../controllers/orderProducts.controller')

const router = express.Router();

router.route('/').get(orderProdController.getOrderProducts)

module.exports = router;