const OrderProducts = require('../models/orderProducts.model')

exports.getOrderProducts = async function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', 'true');

    const orderProds = await OrderProducts.query().modify('getOrderProducts')

    res.status(200).json({
        status: 'success',
        data: orderProds
    })
}