const express = require('express');
const pingRouter = require('./endpoints/ping/ping.router');
const transactionsRouter = require('./endpoints/transactions/transactions.router')

const finalRouter = express.Router();
const routers = [
    pingRouter,
    transactionsRouter
];

routers.forEach((r) => {
    finalRouter.use(r.path, r.router);
});

module.exports = finalRouter;