const utils = require('../../commons/utils');
const { apiVersion, apiEnv } = require('../../config')

const ping = utils.catchAsync(async(req, res) => {
    res.status(200).json({
        message: "Welcome to Kashier Transactions Service.",
        environment: apiEnv,
        version: apiVersion,
        timestamp: (new Date).toISOString()
    });
});

module.exports = { ping }