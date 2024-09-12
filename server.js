const dotenv = require('dotenv')

dotenv.config({ path: './config.env' })
const app = require('./app')

// ! DB SETUP

const port = process.env.PORT || 8000;
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
