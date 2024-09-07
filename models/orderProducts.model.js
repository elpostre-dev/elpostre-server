const { Model, raw } = require('objection')
const { db } = require('../config/db.config')
const path = require('path')
const i_services = require('../services/index_services')


Model.knex(db);

module.exports = class OrderProduct extends Model {
    static get tableName() {
        return 'OrderProducts';
    }

    static get idColumn() {
        return 'sOrderProductId'
    }

    static get relationMappings() {
        return {
            Order: {
                relation: Model.BelongsToOneRelation,
                modelClass: path.join(__dirname, 'orders.model'),
                join: {
                    from: 'OrderProducts.sOrderId', to: 'Orders.sOrderId'
                }
            },
            Product: {
                relation: Model.BelongsToOneRelation,
                modelClass: path.join(__dirname, 'products.model'),
                join: {
                    from: 'OrderProducts.sProductId', to: 'Products.sProductId'
                }
            }
        }
    }

    $beforeInsert() {
        this.sOrderProductId = i_services.insertUUID()
    }

    static modifiers = {
        getOrderProducts(query) {
            query.select('*')
        },
        createOrderProduct(query, {
            sOrderId, sProductId, dPrice, dQuantity
        }) {
            query.insert({
                sOrderId, sProductId, dPrice, dQuantity
            })
        },
        newOrderProduct(query, {
            sOrderId,
            sProductId,
            dPrice,
            dQuantity
        }) {
            query.insert({
                sOrderId,
                sProductId,
                dPrice,
                dQuantity
            })
        },
        deleteProducts(query, sOrderId) {
            query.where('sOrderId', sOrderId)
            query.del()
        }
    }
}