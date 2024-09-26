const Clients = require('../models/clients.model')

exports.getClients = async function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', 'true');

    const clients = await Clients.query().modify('getClients')

    res.status(200).json({
        status: 'success',
        data: clients
    })
}