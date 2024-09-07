const express = require('express');
const orderController = require('../controllers/orders.controller')
const valid = require('../middlewares/validations')
const { celebrate } = require('celebrate')
const aH = require('express-async-handler')

const router = express.Router();

router.route('/').get(celebrate({ query: valid.getOrdersQuery }), orderController.getOrders).post(celebrate({ body: valid.createOrderBody }), orderController.createOrder)

router.route('/:sOrderId').patch(celebrate({ params: valid.orderParams, body: valid.markDeliveredOrder }), aH(orderController.markDelivered)).put(celebrate({ params: valid.orderParams, body: valid.editOrderBody }), aH(orderController.editOrder)).delete(celebrate({ params: valid.orderParams }), aH(orderController.deleteOrder))

module.exports = router;