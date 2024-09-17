const jwt = require('jsonwebtoken');
const { promisify } = require('util');
const MyError = require('../utils/myError');
const messages = require('../utils/messages');
const User = require('../models/users.model');

exports.checkSession = async (req, res, next) => {
    // get token
    let token;
    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith('Bearer')
    ) {
        token = req.headers.authorization.split(' ')[1];
    }
    if (!token) {
        console.log('no token');
        return next(new MyError(401, messages.auth.invalidToken.sp));
    }
    //   validate token
    const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET).catch(err => {
        return next(new MyError(401, messages.auth.invalidToken.sp))
    })
    if (!decoded) {
        console.log('no decoded');
        return next(new MyError(401, messages.auth.invalidToken.sp));
    }

    //   check if user exists
    const freshUser = await User.query().modify('getUserById', decoded.sUserId);

    if (!freshUser) {
        console.log('no user !freshUser');
        return next(new MyError(401), messages.auth.login.notFoundUser.sp);
    }

    req.user = freshUser;
    next();
};