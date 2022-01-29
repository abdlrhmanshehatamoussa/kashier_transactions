const express = require('express')
const app = express();
const bodyParser = require('body-parser')
const router = require('./router');
const errorHandler = require('./commons/error_middleware');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger')

app.use(bodyParser.json());
app.use(router)
app.use(errorHandler)
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

module.exports = app;