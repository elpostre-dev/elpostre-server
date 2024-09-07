const express = require('express')
const catController = require('../controllers/categories.controller')
const valid = require('../middlewares/validations')
const { celebrate } = require('celebrate')

const router = express.Router();

router.route('/').get(catController.getCats).post(celebrate({ body: valid.createCatBody }), catController.createCat)

router.route('/:sCategoryId').get(celebrate({ params: valid.catParams }), catController.getCat)

module.exports = router;