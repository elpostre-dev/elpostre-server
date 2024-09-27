const Order = require('../models/orders.model')
const Clients = require('../models/clients.model')
const OrderProducts = require('../models/orderProducts.model')
const Products = require('../models/products.model')
const MyError = require('../utils/myError');
const i_services = require('../services/index_services')

exports.getOrders = async function (req, res, next) {
    let { eEstablishment, fromDate, toDate, bPaid } = req.query
    if (toDate) {
        toDate = new Date(toDate)
        toDate.setDate(toDate.getDate() + 1)
    }

    const orders = await Order.query().modify('getOrders', { eEstablishment, fromDate, toDate, bPaid })

    res.status(200).json({
        status: 'success',
        data: orders
    })
}

exports.markDelivered = async function (req, res, next) {
    const { sOrderId } = req.params
    const { bDelivered } = req.body
    console.log(bDelivered);

    // verify order
    const order = await Order.query().modify('getOrder', sOrderId)
    if (!order) return next(new MyError(404, "Orden no encontrada."))

    // update order
    const orderDelivered = await Order.query().modify('markDelivered', { sOrderId, bDelivered })

    res.status(200).json({
        status: 'success',
        data: orderDelivered
    })
}

exports.editOrder = async function (req, res, next) {
    const { sName, sLastname, sPhone, sEmail, eEstablishment, dTotal, dPaid, sSalesAgent, aProducts, bDelivery, sStreet, sNumber, sColonia, sZip, sComment } = req.body
    let { tHour, tDay } = req.body
    const { sOrderId } = req.params
    console.log(sOrderId);
    let client = await Clients.query().modify('checkClient', { sName: sName, sLastname: sLastname, sPhone: sPhone })
    // if client doesn't exist, create a new one
    if (!client) {
        client = await Clients.query().modify('createClient', {
            sPhone: sPhone, sName: sName, sLastname: sLastname, sEmail: sEmail
        })
    }
    tDay = tDay.split('T')[0]
    tHour = i_services.convertTime12to24(tHour)
    // edit order
    const updatedOrder = await Order.query().modify('editOrder', sOrderId, {
        sClientId: client.sClientId, eEstablishment, dTotal, dPaid, tDay, tHour, sSalesAgent, bDelivery, sStreet, sNumber, sColonia, sZip, sComment
    })

    // update Order Products
    // delete all products from old order
    await OrderProducts.query().modify('deleteProducts', updatedOrder.sOrderId)
    aProducts.forEach(async prod => {
        // verify product
        const product = await Products.query().modify('getProduct', prod.sProductId)

        if (!product) return next(new MyError(404, "Producto no encontrado: " + prod.sName))

        await OrderProducts.query().modify('newOrderProduct', {
            sOrderId: updatedOrder.sOrderId,
            sProductId: prod.sProductId,
            dPrice: prod.dPrice,
            dQuantity: prod.dQuantity
        })
    })

    res.status(200).json({
        status: 'success',
        message: 'Pedido actualizado exitosamente.',
        data: updatedOrder,
    })
}

exports.deleteOrder = async function (req, res, next) {
    const { sOrderId } = req.params;
    // verify order
    const order = await Order.query().modify('deleteOrder', sOrderId)
    if (!order) return next(new MyError(404, "Orden no encontrada."))

    res.status(200).json({
        status: 'success',
        message: 'Pedido borrado exitosamente.',
        data: order,
    })
}

exports.createOrder = async function (req, res, next) {
    const { sClientName, sClientLastname, sClientPhone, sClientEmail, eEstablishment, dTotal, dPaid, tDay, tHour, sSalesAgent, aProducts, bDelivery, sStreet, sNumber, sColonia, sZip, sComment } = req.body
    let client = await Clients.query().modify('checkClient', { sName: sClientName, sLastname: sClientLastname, sPhone: sClientPhone })
    // if client doesn't exist, create a new one
    if (!client) {
        client = await Clients.query().modify('createClient', {
            sPhone: sClientPhone, sName: sClientName, sLastname: sClientLastname, sEmail: sClientEmail
        })
    }

    // create order
    const order = await Order.query().modify('createOrder', {
        sClientId: client.sClientId, eEstablishment, dTotal, dPaid, tDay, tHour, sSalesAgent, bDelivery, sStreet, sNumber, sColonia, sZip, sComment
    })
    aProducts.forEach(async prod => {
        // verify product
        const product = await Products.query().modify('getProduct', prod.sProductId)

        if (!product) return next(new MyError(404, "Producto no encontrado: " + prod.sName))

        await OrderProducts.query().modify('newOrderProduct', {
            sOrderId: order.sOrderId,
            sProductId: prod.sProductId,
            dPrice: prod.dPrice,
            dQuantity: prod.dQuantity
        })
    })

    res.status(201).json({
        status: 'success',
        message: 'Pedido creado exitosamente.',
        data: order,
    })

}