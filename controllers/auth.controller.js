const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/users.model');
const aH = require('express-async-handler');
const MyError = require('../utils/myError');
const messages = require('../utils/messages');
const authServices = require('../services/auth');

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

    email = email.toLowerCase();

    // Format email input
    const user = await User.query().modify('getUserByEmailLogin', email);
    if (!user) {
        console.log('no user');
        return next(new MyError(401, messages.auth.login.invalidCredentials.sp));
    }

    // Compare entered password with hashed password in the database
    // const isPasswordCorrect = bcrypt.compareSync(password, user.sPassword);
    const isPasswordCorrect = (password === user.sPassword);

    if (!isPasswordCorrect) {
        console.log('no correct pass');
        return next(new MyError(401, messages.auth.login.invalidCredentials.sp));
    }

    // Remove the password from the user object before sending the response
    delete user.sPassword;

    // Create a token and send the response
    authServices.createSendToken(user, 200, messages.auth.login.success, res);
};