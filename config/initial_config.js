const Users = require('../models/users.model')
const bcrypt = require('bcryptjs')

const config = {};

config.adminSetup = async function adminSetup() {
    return new Promise(async (resolve, reject) => {
        const lomas = await Users.query().modify('getUserByEmail', process.env.LOMAS_EMAIL)
        const mississippi = await Users.query().modify('getUserByEmail', process.env.MISSISSIPPI_EMAIL)
        if (lomas) {
            console.log('Lomas already exists');
        } else {
            let mySalt = await bcrypt.genSalt(10);
            let hash = bcrypt.hashSync(process.env.LOMAS_PASS, mySalt)
            await Users.query().modify('signup', {
                sName: 'Lomas',
                sLastname: 'del Valle',
                sEmail: process.env.LOMAS_EMAIL,
                sPassword: hash
            })
            console.log('Lomas was created!');
        }
        if (mississippi) {
            console.log('Mississippi already exists');
        } else {
            let mySalt = await bcrypt.genSalt(10);
            let hash = bcrypt.hashSync(process.env.MISSISSIPPI_PASS, mySalt)
            await Users.query().modify('signup', {
                sName: 'Rio',
                sLastname: 'Mississippi',
                sEmail: process.env.MISSISSIPPI_EMAIL,
                sPassword: hash
            })
            console.log('Mississippi was created!');
        }
        return resolve();
    })
}

module.exports = config