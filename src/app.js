const express = require('express')
const app = express();
const bodyParser = require('body-parser')
const router = require('./router')

app.use(bodyParser.json({ limit: '50mb' }));
app.use(router)

module.exports = app;