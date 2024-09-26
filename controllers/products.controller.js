const Products = require('../models/products.model')

exports.getProducts = async function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', 'true');

    const { sCategoryId } = req.query

    const products = await Products.query().modify('getProducts', { sCategoryId })

    res.status(200).json({
        status: 'success',
        data: products
    })
}


exports.getProduct = async function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', 'true');

    const { sProductId } = req.params

    const product = await Products.query().modify('getProduct', sProductId)

    res.status(200).json({
        status: 'success',
        data: product
    })
}

exports.createProduct = async function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', 'true');

    const { sCategoryId, sName, dPrice } = req.body;

    const product = await Products.query().modify('createProduct', {
        sCategoryId,
        sName,
        dPrice
    })
}


exports.updateProduct = async function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', 'true');

    const { sCategoryId, sName, dPrice } = req.body;

    const product = await Products.query().modify('updateProduct', {
        sCategoryId,
        sName,
        dPrice
    })
}