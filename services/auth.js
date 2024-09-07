const jwt = require('jsonwebtoken');

exports.signToken = sUserId =>
    jwt.sign({ sUserId }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN,
    });

exports.createSendToken = (user, statusCode, message, res) => {
    const token = this.signToken(user.sUserId);

    res.status(statusCode).json({
        status: message,
        token,
        data: { user },
    });
};

exports.expireToken = function (date, minutes) {
    const offset = date.getTimezoneOffset();

    const localDateInMilliseconds = date.setHours(date.getHours() - offset / 60);

    date = new Date(localDateInMilliseconds + minutes * 60000);

    return date.getTime();
};
