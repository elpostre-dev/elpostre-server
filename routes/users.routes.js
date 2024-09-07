const express = require('express')
const userController = require('../controllers/users.controller')
const authCtrl = require('../controllers/auth.controller')

const router = express.Router();

// router.route('/').get(userController.getUsers)

module.exports = router;