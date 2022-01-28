const { mongoDb } = require('../../commons/mongo_provider');

const myCollection = mongoDb.collection('transactions')

const addSingleTransaction = async(merchantid, transaction) => {
    await myCollection.insertOne({
        merchant_id: merchantid,
        ...transaction
    })
}

const addBulkTransactions = async(merchantid, transactions) => {
    let finalTransactions = transactions.map(t => {
        return { merchant_id: merchantid, ...t };
    });
    await myCollection.insertMany(finalTransactions)
}

const getTransactions = async(merchantid) => {
    let results = await myCollection.find({
        merchant_id: merchantid
    }).toArray()
    return results
}

module.exports = {
    addSingleTransaction,
    getTransactions,
    addBulkTransactions,
}