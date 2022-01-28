const utils = require('../commons/utils');

const extractMerchantId = (req) => req.params.merchantid;

const getTransactions = utils.catchAsync(async(req, res) => {
    let merchantid = extractMerchantId(req)
    res.status(200).send(merchantid);
});

const addSingleTransaction = utils.catchAsync(async(req, res) => {
    let merchantid = extractMerchantId(req)
    res.status(200).send(merchantid);
});

module.exports = {
    getTransactions,
    addSingleTransaction
}