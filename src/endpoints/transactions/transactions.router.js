const express = require('express');
const router = express.Router();
const { getTransactions, addSingleTransaction, addBulkTransactions } = require("./transactions.controller")
const { extractMerchantId, validateTransaction, validateTransactionsBulk } = require('./transactions.middleware')

router.route('/:merchantid')
    .get(extractMerchantId, getTransactions)
    .post(validateTransaction, extractMerchantId, addSingleTransaction)
    .patch(validateTransactionsBulk, extractMerchantId, addBulkTransactions)

module.exports = {
    router: router,
    path: '/transactions'
}