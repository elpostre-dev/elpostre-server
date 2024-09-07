const { Model, raw } = require('objection')
const { db } = require('../config/db.config')
const path = require('path')
const i_services = require('../services/index_services')


Model.knex(db);

module.exports = class Product extends Model {
    static get tableName() {
        return 'Products';
    }

    static get idColumn() {
        return 'sProductId'
    }

    $beforeInsert() {
        this.sProductId = i_services.insertUUID()
    }

    static get relationMappings() {
        return {
            Category: {
                relation: Model.BelongsToOneRelation,
                modelClass: path.join(__dirname, 'categories.model'),
                join: {
                    from: 'Products.sCategoryId', to: 'Categories.sCategoryId'
                }
            },
            OrderProducts: {
                relation: Model.BelongsToOneRelation,
                modelClass: path.join(__dirname, 'orderProducts.model'),
                join: {
                    from: 'Products.sProductId', to: 'OrderProducts.sProductId'
                }
            },
        }
    }

    static modifiers = {
        getProducts(query, { sCategoryId }) {
            query.select('sProductId', 'sName', 'dPrice')
            query.where('bActive', true)
            query.orderBy('sName', 'asc')
            if (sCategoryId) query.where('sCategoryId', sCategoryId)
        },
        getProduct(query, sProductId) {
            query.findById(sProductId)
            query.select('sName', 'sProductId', 'dPrice')
            query.where('bActive', true)
        },
        createProduct(query, { sName, dPrice, sCategoryId }) {
            query.insert({
                sName,
                dPrice,
                sCategoryId
            })
        },
        updateProduct(query, { sProductId, body }) {
            query.fetchAndUpdateById(sProductId, { body })
            query.where('bActive', true)
        }
    }
}