require('dotenv').config();
const utils = require('./commons/utils');

const apiPort = 8080;
const databaseConnectionString = process.env.DB_URL;
const databaseName = process.env.DB_NAME;

if (
    utils.isNullOrEmpty(databaseConnectionString) ||
    utils.isNullOrEmpty(databaseName)
) {
    console.error("Kashier service falied to start, invalid configurations")
    process.exit(1)
}

module.exports = {
    apiPort,
    databaseConnectionString,
    databaseName
}