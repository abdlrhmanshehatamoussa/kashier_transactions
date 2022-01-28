const utils = require('../../commons/utils');
const transactionsService = require('./transactions.service')

const extractMerchantId = (req) => req.params.merchantid;

const getTransactions = utils.catchAsync(async(req, res) => {
    let merchantid = extractMerchantId(req)
    let results = await transactionsService.getTransactions(merchantid)
    res.status(200).send(results);
});

const addSingleTransaction = utils.catchAsync(async(req, res) => {
    let merchantid = extractMerchantId(req)
    let transaction = req.body
    await transactionsService.addSingleTransaction(merchantid, transaction)
    res.status(201).send();
});

const addBulkTransactions = utils.catchAsync(async(req, res) => {
    let merchantid = extractMerchantId(req)
    let transactions = req.body
    await transactionsService.addBulkTransactions(merchantid, transactions)
    res.status(201).send();
});

module.exports = {
    getTransactions,
    addSingleTransaction,
    addBulkTransactions
}