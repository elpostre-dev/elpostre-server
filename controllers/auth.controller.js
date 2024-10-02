// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// const User = require('../models/users.model');
// const aH = require('express-async-handler');
// const MyError = require('../utils/myError');
// const messages = require('../utils/messages');
// const authServices = require('../services/auth');

// exports.signup = aH(async (req, res, next) => {
//     const {
//         sName, sLastname, sEmail, sPassword
//     } = req.body

//     const alreadyUser = await User.query().modify('getUserByEmail', sEmail)
//     console.log(alreadyUser, 'hello');
//     if (alreadyUser) return next(new MyError(400, "Correo ya en uso."))

//     const newUser = await User.query().modify('signup', {
//         sName, sLastname, sEmail, sPassword
//     })

//     delete newUser.sPassword

//     res.status(201).json({
//         status: 'succes',
//         data: { user: newUser }
//     })
// })

// exports.login = async (req, res, next) => {

//     let { email, password } = req.body;
//     email = email.toLowerCase();

//     // const user = await User.query().modify('getUserByEmailLogin', email);
//     // console.log('user', user);
//     // if (!user) {
//     //     console.log('no user');
//     //     return next(new MyError(401, messages.auth.login.invalidCredentials.sp));
//     // }

//     const isPasswordCorrect = (password === process.env.MISSISSIPPI_PASS)
//     // const isPasswordCorrect = bcrypt.compareSync(password, user.sPassword);
//     if (!isPasswordCorrect) {
//         console.log('pass incorrect');
//         return next(new MyError(401, messages.auth.login.invalidCredentials.sp));
//     }

//     // delete user.sPassword;
//     authServices.createSendToken({
//         sUserId: process.env.S_USERID,
//         sName: 'Rio',
//         sLastname: 'Mississippi',
//         sEmail: process.env.MISSISSIPPI_EMAIL,
//         sPassword: process.env.S_PASSWORD
//     }, 200, messages.auth.login.success, res);
// };

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

    email = email.toLowerCase();

    // Format email input and check user existence
    const user = await User.query().modify('getUserByEmailLogin', email);
    if (!user)
        return next(new MyError(401, messages.auth.login.invalidCredentials.sp));

    const pass = bcrypt.compareSync(password, user.sPassword);
    if (!pass)
        return next(new MyError(401, messages.auth.login.invalidCredentials.sp));

    delete user.password;

    // Send token with 100-day expiration
    authServices.createSendToken(user, 200, messages.auth.login.success, res);
};