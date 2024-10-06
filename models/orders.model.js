const { Model, raw } = require('objection')
const { db } = require('../config/db.config')
const path = require('path')
const i_services = require('../services/index_services')
const { v4: uuidv4 } = require('uuid');
const { string } = require('@hapi/joi');

Model.knex(db);

module.exports = class Order extends Model {
    static get tableName() {
        return 'Orders';
    }

    static get idColumn() {
        return 'sOrderId'
    }

    static get virtualAttributes() {
        return ['porPagar']
    }

    porPagar() {
        return this.dTotal - this.dPaid
    }

    $beforeInsert() {
        this.sOrderId = i_services.insertUUID()
    }

    static get relationMappings() {
        return {
            OrderProducts: {
                relation: Model.HasManyRelation,
                modelClass: path.join(__dirname, 'orderProducts.model'),
                join: {
                    from: 'Orders.sOrderId', to: 'OrderProducts.sOrderId'
                }
            },
            Client: {
                relation: Model.BelongsToOneRelation,
                modelClass: path.join(__dirname, 'clients.model'),
                join: {
                    from: 'Orders.sClientId',
                    to: 'Clients.sClientId'
                }
            }
        }
    }

    $beforeInsert() {
        const uuid = uuidv4()
        this.sOrderId = uuid
        this.tHour = i_services.convertTime12to24(this.tHour)
    }

    $afterFind() {
        const options = { dateStyle: "medium" }
        this.tDayDisplay = this.tDay.toLocaleDateString('es-MX', options)
        if (this.Client) {
            this.clientFullName = this.Client.sName + ' ' + this.Client.sLastname
        }
        if (this.OrderProducts) {
            this.prodsStr = ''
            this.OrderProducts.forEach(e => {
                if (e.Product.Category.sName === 'Pastel mediano alto') {
                    this.prodsStr += `${String(e.dQuantity)} ${e.Product.sName} Mediano alto\r`
                } else if (e.Product.Category.sName === 'Pastel mediano bajo') {
                    this.prodsStr += `${String(e.dQuantity)} ${e.Product.sName} Mediano bajo\r`
                } else {
                    this.prodsStr += `${String(e.dQuantity)} ${e.Product.sName}\r`
                }
            })
            if (this.prodsStr.length > 0) {
                this.prodsStr = this.prodsStr.substring(0, this.prodsStr.length - 1);
            }
        }
        this.tHour = i_services.convertTime24to12(this.tHour)
        if (this.bDelivery) {
            this.bDelivery = 'Si'
        }
        else {
            this.bDelivery = 'No'
        }
    }

    static modifiers = {
        getOrders(query, { eEstablishment, fromDate, toDate, bPaid }) {
            query.select('*')
            query.join('Clients', 'Clients.sClientId', 'Orders.sClientId')
            query.select(db.raw(`TIME_FORMAT("tHour", "%h:%i") as time`))
            query.withGraphJoined('Client')
            query.withGraphFetched('OrderProducts')
            query.modifyGraph('OrderProducts', graph => {
                graph.withGraphFetched('Product')
                graph.modifyGraph('Product', build => {
                    build.withGraphFetched('Category')
                })
            })
            query.orderBy('tDay')
            query.orderBy('tHour')
            query.orderBy('Clients.sName')
            query.where('bDelivered', false)
            if (eEstablishment) query.where('eEstablishment', eEstablishment)
            if (fromDate) query.where('tDay', '>=', fromDate)
            if (toDate) query.where('tDay', '<', toDate)
            if (bPaid != null) {
                if (bPaid == true) query.whereRaw("?? = ??", ["dPaid", "dTotal"])
                if (bPaid == false) query.whereRaw("?? <> ??", ["dPaid", "dTotal"])
            }
            query.where('Orders.bActive', true)
        },
        getOrder(query, sOrderId) {
            query.findById(sOrderId)
        },
        createOrder(query, {
            sClientId, eEstablishment, dTotal, dPaid, tDay, tHour, sSalesAgent, bDelivery, sStreet, sNumber, sColonia, sZip, sComment
        }) {
            query.insert({
                sClientId, eEstablishment, dTotal, dPaid, tDay, tHour, sSalesAgent, bDelivery, sStreet, sNumber, sColonia, sZip, sComment
            })
        },
        editOrder(query, sOrderId, {
            sClientId, eEstablishment, dTotal, dPaid, tDay, tHour, sSalesAgent, bDelivery, sStreet, sNumber, sColonia, sZip, sComment
        }) {
            query.updateAndFetchById(sOrderId, {
                sClientId, eEstablishment, dTotal, dPaid, tDay, tHour, sSalesAgent, bDelivery, sStreet, sNumber, sColonia, sZip, sComment
            })
        },
        markDelivered(query, { sOrderId, bDelivered }) {
            query.patchAndFetchById(sOrderId, {
                bDelivered
            })
        },
        deleteOrder(query, sOrderId) {
            query.patchAndFetchById(sOrderId, {
                bActive: false
            })
        }
    }
}