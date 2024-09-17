const bcrypt = require('bcryptjs');
const { promisify } = require('util');
const jwt = require('jsonwebtoken');
const User = require('../models/users.model');
const aH = require('express-async-handler');
const MyError = require('../utils/myError');
const messages = require('../utils/messages')
const authServices = require('../services/auth')
exports.signup = aH(async (req, res, next) => {
    const {
        sName, sLastname, sEmail, sPassword
    } = req.body

    const alreadyUser = await User.query().modify('getUserByEmail', sEmail)
    console.log(alreadyUser, 'hello');
    if (alreadyUser) return next(new MyError(400, "Correo ya en uso."))

    const newUser = await User.query().modify('signup', {
        sName, sLastname, sEmail, sPassword
    })

    delete newUser.sPassword

    res.status(201).json({
        status: 'succes',
        data: { user: newUser }
    })
})

exports.login = async (req, res, next) => {
    let { email, password } = req.body;

    email = email.toLowerCase()

    //   format email input
    const user = await User.query().modify('getUserByEmailLogin', email);
    if (!user) {
        console.log('no user');
        return next(new MyError(401, messages.auth.login.invalidCredentials.sp));
    }
    // const pass = bcrypt.compareSync(password, user.sPassword);
    console.log('user from DB:', user)
    console.log('typed pass from User:', password)
    let typedPass = bcrypt.hashSync(password, 10)
    console.log('typed pass hashed:', typedPass)
    console.log('hash pass from DB:', user.sPassword)
    const pass = (typedPass === user.sPassword)
    if (!pass) {
        console.log('no correct pass');
        return next(new MyError(401, messages.auth.login.invalidCredentials.sp));
    }

    delete user.password;

    authServices.createSendToken(user, 200, messages.auth.login.success, res);
};