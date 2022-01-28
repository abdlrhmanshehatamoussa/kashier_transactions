const express = require('express');
const router = express.Router();
const transactionsController = require("./transactions.controller")

router.route('/:merchantid')
    .get(transactionsController.getTransactions)
    .post(transactionsController.addSingleTransaction)
    .patch(transactionsController.addBulkTransactions)

module.exports = {
    router: router,
    path: '/transactions'
}