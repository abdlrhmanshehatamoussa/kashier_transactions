const utils = require('../../commons/utils');
const transactionsService = require('./transactions.service')

const extractMerchantId = (res) => res.locals.merchantid;

const getTransactions = utils.catchAsync(async(req, res) => {
    let merchantid = extractMerchantId(res)
    let results = await transactionsService.getTransactions(merchantid)
    res.status(200).send(results);
});

const addSingleTransaction = utils.catchAsync(async(req, res) => {
    let merchantid = extractMerchantId(res)
    let transaction = res.locals.validatedTransaction
    await transactionsService.addSingleTransaction(merchantid, transaction)
    res.status(201).send();
});

const addBulkTransactions = utils.catchAsync(async(req, res) => {
    let merchantid = extractMerchantId(res)
    let transactions = res.locals.validatedTransactionsArray
    await transactionsService.addBulkTransactions(merchantid, transactions)
    res.status(201).send();
});

module.exports = {
    getTransactions,
    addSingleTransaction,
    addBulkTransactions
}