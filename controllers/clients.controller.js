const Clients = require('../models/clients.model')

exports.getClients = async function (req, res, next) {
    const clients = await Clients.query().modify('getClients')

    res.status(200).json({
        status: 'success',
        data: clients
    })
}