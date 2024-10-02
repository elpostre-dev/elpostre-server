
const jwt = require('jsonwebtoken');

// Generate token with 100 days expiration
exports.signToken = sUserId =>
    jwt.sign({ sUserId }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN, // Use the 100-day expiry set in the .env file
    });

exports.createSendToken = (user, statusCode, message, res) => {
    const token = this.signToken(user.sUserId);

    // Send token and user data
    res.status(statusCode).json({
        status: message,
        token,
        data: { user },
    });
};

exports.expireToken = function (date, days) {
    const offset = date.getTimezoneOffset();

    const localDateInMilliseconds = date.setHours(date.getHours() - offset / 60);

    // Instead of minutes, calculate in days
    date = new Date(localDateInMilliseconds + days * 24 * 60 * 60 * 1000); // 100 days = 100 * 24 hours

    return date.getTime();
};
