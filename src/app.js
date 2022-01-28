const express = require('express')
const app = express();
const bodyParser = require('body-parser')
const router = require('./router');
const errorHandler = require('./commons/error_middleware');

app.use(bodyParser.json());
app.use(router)
app.use(errorHandler)

module.exports = app;