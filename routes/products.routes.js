const express = require('express')
const aH = require('express-async-handler')
const productController = require('../controllers/products.controller')
const valid = require('../middlewares/validations')
const { celebrate } = require('celebrate')

const router = express.Router();

router.route('/').get(productController.getProducts).post(celebrate({ body: valid.productBody }), productController.createProduct)

router.route('/:sProductId').get(celebrate({ params: valid.productParams }), productController.getProduct).put(celebrate({ body: valid.productUpdateBody, params: valid.productParams }), productController.updateProduct)

module.exports = router;