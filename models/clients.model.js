const { Model, raw } = require('objection')
const { db } = require('../config/db.config')
const path = require('path')
const { v4: uuidv4 } = require('uuid');
const i_services = require('../services/index_services')

Model.knex(db);

module.exports = class Client extends Model {
    static get tableName() {
        return 'Clients';
    }

    static get idColumn() {
        return 'sClientId'
    }

    static get virtualAttributes() {
        return ['fullName']
    }

    fullName() {
        return this.sName + ' ' + this.sLastname
    }

    static get relationMappings() {
        return {
            Orders: {
                relation: Model.HasManyRelation,
                modelClass: path.join(__dirname, 'orders.model'),
                join: {
                    from: 'Clients.sClientId', to: 'Orders.sClientId'
                }
            }
        }
    }

    $beforeInsert() {
        this.sClientId = i_services.insertUUID()
    }

    static modifiers = {
        getClients(query) {
            query.select('*')
        },

        checkClient(query, { sName, sLastname, sPhone }) {
            query.select('*')
            query.where('sName', sName)
            query.andWhere('sLastname', sLastname)
            query.andWhere('sPhone', sPhone)
            query.first()
        },

        updateEmail(query, { sClientId, sClientEmail }) {
            query.update({ sClientEmail })
            query.where('sClientId', sClientId)
        },
        createClient(query, { sName, sLastname, sPhone, sClientEmail }) {
            query.insert({ sName, sLastname, sPhone, sClientEmail })
            query.select(db.raw(`LAST_INSERT_ID()`));
        }
    }
}