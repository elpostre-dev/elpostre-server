const { Joi } = require('celebrate')
const messages = require('../utils/messages')

const mw = {}

const idOnlyParams = (key, error) =>
    Joi.object().keys({
        [key]: Joi.string().required().error(new Error(error)),
    });

const emailValidation = Joi.string()
    .required()
    .error(new Error(messages.auth.invalidEmail.sp));

const passwordValidation = Joi.string()
    .required()
    .error(new Error('Favor de enviar una contraseña correcta.'));

// AUTH
mw.loginBody = Joi.object().keys({
    email: emailValidation,
    password: passwordValidation,
});

// CATS
mw.createCatBody = Joi.object().keys({
    sName: Joi.string()
        .required()
        .error(new Error('Favor de ingresar un nombre de categoría válido.')),
});

mw.catParams = idOnlyParams('sCategoryId', 'Favor de ingresar un ID de categoría válido')

// ORDER
mw.getOrdersQuery = Joi.object().keys({
    eEstablishment: Joi.string()
        .valid('', 'Mississippi', 'Lomas')
        .error(new Error('Favor de ingresar un nombre de sucursal válido.')),
    fromDate: Joi.date().error(new Error('Favor de ingresar una fecha de inicio válida')),
    toDate: Joi.date().error(new Error('Favor de ingresar una fecha de fin válida')),
    bPaid: Joi.boolean().error(new Error('Favor de ingresar un verdadero o falso de pagado.')),
});

mw.orderParams = idOnlyParams('sOrderId', 'Favor de ingresar un ID de órden válido')

mw.createOrderBody = Joi.object().keys({
    sClientName: Joi.string().required().error(new Error('Favor de ingresar un nombre de cliente válido')),
    sClientLastname: Joi.string().required().error(new Error('Favor de ingresar un apellido de cliente válido')),
    sClientPhone: Joi.string().required().error(new Error('Favor de ingresar un teléfono de cliente válido')),
    sClientEmail: Joi.string().allow('').error(new Error('Favor de ingresar un correo de cliente válido')),
    eEstablishment: Joi.string()
        .required()
        .valid('', 'Mississippi', 'Lomas')
        .error(new Error('Favor de ingresar un nombre de sucursal válido.')),
    dTotal: Joi.number().required().min(0).error(new Error('Favor de ingresar un valor de órden total válido')),
    dPaid: Joi.number().required().min(0).error(new Error('Favor de ingresar un valor de órden pagado válido')),
    tDay: Joi.string().required().error(new Error('Favor de ingresar un día órden pagado válido')),
    tHour: Joi.string().required().error(new Error('Favor de ingresar horario de órden pagado válido')),
    sSalesAgent: Joi.string().required().error(new Error('Favor de ingresar un agente de venta válido')),
    aProducts: Joi.array().required().error(new Error('Favor de ingresar productos válidos')),
    bDelivery: Joi.boolean().required().error(new Error('Favor de ingresar un buleano de entrega a domicilio')),
    sStreet: Joi.string().allow('').error(new Error('Favor de ingresar una dirección de calle válida')),
    sNumber: Joi.string().allow('').error(new Error('Favor de ingresar un número de entrega')),
    sColonia: Joi.string().allow('').error(new Error('Favor de ingresar una colonia de entrega válida')),
    sZip: Joi.string().allow('').error(new Error('Favor de ingresar un código postal válido')),
    sComment: Joi.string().allow('').error(new Error('Favor de ingresar un comentario de órden válido')),
});

mw.editOrderBody = Joi.object().keys({
    sName: Joi.string().required().error(new Error('Favor de ingresar un nombre de cliente válido')),
    sLastname: Joi.string().required().error(new Error('Favor de ingresar un apellido de cliente válido')),
    sPhone: Joi.string().required().error(new Error('Favor de ingresar un teléfono de cliente válido')),
    sEmail: Joi.string().allow('').error(new Error('Favor de ingresar un correo de cliente válido')),
    eEstablishment: Joi.string()
        .required()
        .valid('', 'Mississippi', 'Lomas')
        .error(new Error('Favor de ingresar un nombre de sucursal válido.')),
    dTotal: Joi.number().required().error(new Error('Favor de ingresar un valor de órden total válido')),
    dPaid: Joi.number().required().error(new Error('Favor de ingresar un valor de órden pagado válido')),
    tDay: Joi.string().required().error(new Error('Favor de ingresar un día órden pagado válido')),
    tHour: Joi.string().required().error(new Error('Favor de ingresar horario de órden pagado válido')),
    sSalesAgent: Joi.string().required().error(new Error('Favor de ingresar un agente de venta válido')),
    aProducts: Joi.array().required().error(new Error('Favor de ingresar productos válidos')),
    bDelivery: Joi.boolean().required().error(new Error('Favor de ingresar un buleano de entrega a domicilio')),
    sStreet: Joi.string().allow('').error(new Error('Favor de ingresar una dirección de calle válida')),
    sNumber: Joi.string().allow('').error(new Error('Favor de ingresar un número de entrega')),
    sColonia: Joi.string().allow('').error(new Error('Favor de ingresar una colonia de entrega válida')),
    sZip: Joi.string().allow('').error(new Error('Favor de ingresar un código postal válido')),
    sComment: Joi.string().allow('').error(new Error('Favor de ingresar un comentario de órden válido')),
});

mw.markDeliveredOrder = Joi.object().keys({
    bDelivered: Joi.boolean().required()
        .error(new Error("Favor de ingresar un buleano de pedido entregado.")),
});


// PRODUCTS
mw.productParams = idOnlyParams('sProductId', messages.products.params.sp)

mw.productBody = Joi.object().keys({
    sName: Joi.string()
        .required()
        .error(new Error('Favor de ingresar un nombre de cliente válido.')),
    sCategoryId: Joi.string()
        .required()
        .error(new Error('Favor de ingresar un ID de categoría válido.')),
    dPrice: Joi.number()
        .required()
        .error(new Error('Favor de ingresar un precio de producto válido.')),
});

mw.productUpdateBody = Joi.object().keys({
    sName: Joi.string()
        .allow('')
        .error(new Error('Favor de ingresar un nombre de cliente válido.')),
    sCategoryId: Joi.string()
        .allow('')
        .error(new Error('Favor de ingresar un ID de categoría válido.')),
    dPrice: Joi.number()
        .allow('')
        .error(new Error('Favor de ingresar un precio de producto válido.')),
});

module.exports = mw;