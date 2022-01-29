const { mongoDb } = require('../../commons/mongo_provider');
const utils = require('../../commons/utils')
const myCollection = mongoDb.collection('transactions')

const buildTransaction = (merchantid, transaction) => {
    return {
        merchant_id: merchantid,
        timestamp: utils.today(),
        ...transaction
    };
}

const addSingleTransaction = async(merchantid, transaction) => {
    await myCollection.insertOne(buildTransaction(merchantid, transaction))
}

const addBulkTransactions = async(merchantid, transactions) => {
    let finalTransactions = transactions.map(transaction => buildTransaction(merchantid, transaction));
    await myCollection.insertMany(finalTransactions)
}

const getTransactions = async(merchantid) => {
    let today = utils.today()
    let transactions = await myCollection.find({
        merchant_id: merchantid,
        timestamp: today
    }).toArray()
    let report = generateReport(transactions)
    return {
        date: today,
        report: report
    }
}

const generateReport = (transactions) => {
    let result = {}
    transactions.forEach(transaction => {
        let currency = transaction.currency
        let details = result[currency]
        if (details === null || details === undefined) {
            details = {
                deposit: 0,
                withdrawal: 0,
                net: 0
            }
        }
        if (transaction.operation === true) {
            details.deposit += transaction.amount
        } else {
            details.withdrawal += transaction.amount
        }
        details.net = details.deposit - details.withdrawal
        result[currency] = details
    })
    return result
}

module.exports = {
    addSingleTransaction,
    getTransactions,
    addBulkTransactions,
}