const {
    ValidationError,
    NotFoundError,
    DBError,
    UniqueViolationError,
    NotNullViolationError,
    ForeignKeyViolationError,
    CheckViolationError,
    DataError,
} = require('objection');
const MyError = require('./myError');

// eslint-disable-next-line prefer-const
let errorHandler = () => (err, req, res, next) => {
    // eslint-disable-next-line no-prototype-builtins
    if (err.hasOwnProperty('joi') || err.message.includes('joi')) {
        err.type = 'JoiValidationError';
    }
    console.log(
        '———————————————————————————————————————————————————————————————————————————',
        err
    );
    if (err.name === 'CustomError') {
        const { password } = req.body;
        // eslint-disable-next-line node/no-unsupported-features/es-syntax
        const body = { ...req.body };
        if (password) body.password = '*********';
        console.log({
            body,
            params: req.params,
            query: req.query,
        });
        return next(err);
    }
    if (err.message === 'Validation failed') {
        return next(new MyError(400, err.message));
    }
    if (err instanceof DataError) {
        return next(
            new MyError(400, 'Verifique que los campos ingresados sean correctos.')
        );
    }
    if (err.name === 'TokenExpiredError') {
        return next(new MyError(409, 'No se ha iniciado sesión.'));
    }
    if (err.type === 'JoiValidationError') {
        console.log(err);
        return next(new MyError(403, err.message));
    }
    if (err instanceof UniqueViolationError) {
        return next(new MyError(400, 'No se pueden duplicar llaves únicas.'));
    }
    if (err instanceof ValidationError) {
        return next(new MyError(400, 'Favor de verificar los campos de entrada.'));
    }
    if (err instanceof NotFoundError) {
        return next(new MyError(404, 'No se ha encontrado ese servicio.'));
    }
    if (err instanceof DBError) {
        return next(new MyError(500, 'Error con la base de datos del servidor.'));
    }
    if (err instanceof NotNullViolationError) {
        return next(new MyError(400, 'Valor tiene que ser nulo.'));
    }
    if (err instanceof ForeignKeyViolationError) {
        return next(new MyError(409, 'Conflicto debido a llaves foráneas.'));
    }
    if (err instanceof CheckViolationError) {
        return next(new MyError(400, 'Checar violación de data.'));
    }
};

module.exports = errorHandler;
