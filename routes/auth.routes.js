const express = require('express')
const userController = require('../controllers/users.controller')
const authCtrl = require('../controllers/auth.controller');
const valid = require('../middlewares/validations')
const { celebrate } = require('celebrate')
const passport = require('passport');

const router = express.Router();

router.route('/login').post(celebrate({ body: valid.loginBody }), authCtrl.login)

// no signup needed
// router.route('/signup').post(authCtrl.signup)

module.exports = router;