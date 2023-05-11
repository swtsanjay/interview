const { validationResult } = require('express-validator');
const Response = require('../../utilities/Response');
const Message = require('../../utilities/Message');

function formValidation(req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return Response.fail(res, Message.unprocessable.message, Message.unprocessable.code, Message.unprocessable.code, errors.array({ onlyFirstError: true }))
    } else {
        next();
    }
}

module.exports = { formValidation };