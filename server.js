const dotenv = require('dotenv')
const db = require('./config/db.config')

// process.on('uncaughtException', err => {
//     console.log('UNCAUGHT EXCEPTION! Shutting down...');
//     console.log(err.name, err.message);
//     process.exit(1);
// })

dotenv.config({ path: './config.env' })
const app = require('./app')

// ! DB SETUP

const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
    console.log(`PostrePedidos backend running on port ${port}...`);
})


if (process.env.NODE_ENV != 'development')
    process.on('unhandledRejection', err => {
        console.log('UNHANDLED REJECTION! 💥 Shutting down...');
        console.log(err.name, err.message);
        server.close(() => {
            process.exit(1);
        });
    });

process.on('SIGTERM', () => {
    console.log('👋 SIGTERM RECEIVED. Shutting down gracefully');
    server.close(() => {
        console.log('💥 Process terminated!');
    });
});

db.on('query', query => {
    console.log(query.sql);
});