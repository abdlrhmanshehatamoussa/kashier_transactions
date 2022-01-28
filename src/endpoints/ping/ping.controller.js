const utils = require('../../commons/utils');

const ping = utils.catchAsync(async(req, res) => {
    res.status(200).json({
        message: "Welcome to Kashier Transactions Service.",
        timestamp: (new Date).toISOString()
    });
});

module.exports = { ping }