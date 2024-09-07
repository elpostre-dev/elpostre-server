const express = require('express')
const clientController = require('../controllers/clients.controller')

const router = express.Router();

router.route('/').get(clientController.getClients)

module.exports = router;