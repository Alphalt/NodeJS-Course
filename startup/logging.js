const winston = require('winston');
//require('winston-mongodb');
require('express-async-errors');

module.exports = function () {
    //For logging uncaught exceptions.
    winston.handleExceptions(
        new winston.transports.Console({ colorize: true, prettyPrint: true }),
        new winston.transports.File({ filename: 'uncaughtExceptions.log' }));

    //For the unhandled exceptions from outside of Express.
    process.on('unhandledRejection', (ex) => {
        throw ex;
    });

    //For the exceptions from MongoDB.
    winston.add(winston.transports.File, { filename: 'logfile.log' });
    // winston.add(winston.transports.MongoDB, {
    //     db: 'mongodb://localhost/vidly',
    //     level: 'info'
    // });

}