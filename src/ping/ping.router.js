const express = require('express');
const router = express.Router();
const pingController = require('./ping.controller')

router.route('/').get(pingController.ping)

module.exports = {
    router: router,
    path: '/'
}