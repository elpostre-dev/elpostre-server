const OrderProducts = require('../models/orderProducts.model')

exports.getOrderProducts = async function (req, res, next) {
    const orderProds = await OrderProducts.query().modify('getOrderProducts')

    res.status(200).json({
        status: 'success',
        data: orderProds
    })
}