const { Model, raw } = require('objection')
const { db } = require('../config/db.config')
const path = require('path')
const i_services = require('../services/index_services')


Model.knex(db);

module.exports = class Category extends Model {
    static get tableName() {
        return 'Categories';
    }

    static get idColumn() {
        return 'sCategoryId'
    }

    name() {
        return this.sName
    }

    static get relationMappings() {
        return {
            Products: {
                relation: Model.HasManyRelation,
                modelClass: path.join(__dirname, 'products.model'),
                join: {
                    from: 'Categories.sCategoryId', to: 'Products.sCategoryId'
                }
            }
        }
    }
    $beforeInsert() {
        this.sCategoryId = i_services.insertUUID()
    }

    static modifiers = {
        getCategories(query) {
            query.select('sCategoryId', 'sName')
            query.orderBy('sName', 'asc')
        },
        getCategory(query, { sCategoryId }) {
            query.findById(sCategoryId)
            query.select('sName', 'sCategoryId')
        },
        createCategory(query, { sName }) {
            query.insert({
                sName
            })
        },
        updateCategoryById(query, { sCategoryId, sName }) {
            query.fetchAndUpdateById(sCategoryId, {
                sName
            })
        },

    }
}