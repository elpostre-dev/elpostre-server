const Users = require('../models/users.model')

exports.getUsers = async function (req, res, next) {
    const users = await Users.query().modify('getUsers')

    res.status(200).json({
        status: 'success',
        data: users
    })
}