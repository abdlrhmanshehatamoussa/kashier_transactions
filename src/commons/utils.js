const assertHasProperty = (obj, prop) => {
    let has = (obj[prop] === null || obj[prop] === undefined);
    if (has == false) {
        throw new Error(prop);
    }
    return has;
}

const catchAsync = (fn) => (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch((err) => next(err));
};

module.exports = {
    assertHasProperty,
    catchAsync
}