const { Model, raw } = require('objection')
const bcrypt = require('bcryptjs');
const { db } = require('../config/db.config')
const path = require('path')
const i_services = require('../services/index_services')


Model.knex(db);

module.exports = class User extends Model {
    static get tableName() {
        return 'Users';
    }

    static get idColumn() {
        return 'sUserId'
    }

    fullName() {
        return this.sName + ' ' + this.sLastname
    }

    static modifiers = {
        getUsers(query) {
            query.select('*')
        },
        getUserByEmail(query, sEmail) {
            query.select('sUserId', 'sName', 'sLastname', 'sEmail')
            query.where('sEmail', sEmail)
            query.first();
        },
        getUserByEmailLogin(query, sEmail) {
            query.select('sUserId', 'sName', 'sLastname', 'sEmail', 'sPassword')
            query.where('sEmail', sEmail)
            query.first();
        },
        getUserById(query, sUserId) {
            query.findById(sUserId)
            query.where('bActive', true)
        },
        signup(query, { sName, sLastname, sEmail, sPassword }) {
            query.insert({
                sName, sLastname, sPassword, sEmail
            })
        }
    }

    async $beforeInsert() {
        this.sUserId = i_services.insertUUID()
        const salt = bcrypt.genSaltSync();
        this.sPassword = await bcrypt.hash(this.sPassword, salt)
    }
}