var createError = require('http-errors');
var express = require('express');
var path = require('path');
const rateLimit = require('express-rate-limit');
var logger = require('morgan');
const morgan = require('morgan')
const helmet = require('helmet')
const xss = require('xss-clean')
const cors = require('cors')
const jwt = require('jsonwebtoken')
const errorHandler = require('./utils/errorHandler')
const sendJson = require('./middlewares/sendAsJson')

var clientsRouter = require('./routes/clients.routes');
var usersRouter = require('./routes/users.routes');
var categoriesRouter = require('./routes/categories.routes');
var productsRouter = require('./routes/products.routes');
var ordersRouter = require('./routes/orders.routes');
var authRouter = require('./routes/auth.routes.js');
var orderProductsRouter = require('./routes/orderProducts.routes');

var app = express();

// Configuración de CORS
const corsOptions = {
  origin: 'https://elpostrepedidos.netlify.app',
  methods: ['GET', 'PUT', 'POST', 'DELETE', 'PATCH'],
};

app.use(cors(corsOptions));

// Body parser, reading data from body into req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger('combined'));


// delete password from logs
app.use((req, res, next) => {
  let { password } = req.body;
  let body = { ...req.body };
  if (password) body.password = "*********";
  console.log({
    body: body,
    params: req.params,
    query: req.query
  });
  next();
});

// set security HTTP headers
app.use(helmet())

// Limit requests from same API
const limiter = rateLimit({
  max: 500,
  windowMs: 60 * 60 * 1000,
  message: 'Too many requests from this IP, please try again in an hour!'
});
app.use('/api/*', limiter);


// Data sanitization against XSS
app.use(xss());

app.use('/api/v1/auth', authRouter);


const { checkSession } = require('./middlewares/auth')

app.use(checkSession)
app.use('/api/v1/clients', clientsRouter);
app.use('/api/v1/users', usersRouter);
app.use('/api/v1/categories', categoriesRouter);
app.use('/api/v1/products', productsRouter);
app.use('/api/v1/orders', ordersRouter);
app.use('/api/v1/order-products', orderProductsRouter);

// Error handlers
app.use(errorHandler())
app.use(sendJson())

// initial config
const init_config = require('./config/initial_config')
init_config.adminSetup();

// Development logging
// if (process.env.NODE_ENV === 'development') {
//   app.use(morgan('dev'));
// }

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// use the express-static middleware
app.use(express.static("public"))

// // error handler
// app.use(function (err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

module.exports = app;
