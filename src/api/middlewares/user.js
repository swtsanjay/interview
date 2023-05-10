const jwt = require('jsonwebtoken');
const Response = require('../../utilities/Response');
const Message = require('../../utilities/Message');
const config = require('../../config');
const userService = require('../../services/user');

module.exports = {
    validateToken: async (req, res, next) => {
        try {
            if (req.headers.authorization) {
                const authorization = req.headers.authorization.trim();
                if (authorization.startsWith('Bearer ')) {
                    const bearer = req.headers.authorization.split(" ");
                    const token = bearer[1];
                    const decode = jwt.verify(token, config.jwt.secretKey);
                    const cuser = (await userService.getDetails({ _id: decode.userId })).data;
                    if (!cuser) {
                        throw new Error();
                    }
                    req.__cuser = cuser;
                    next();
                } else {
                    throw new Error();
                }
            } else {
                throw new Error();
            }
        } catch (e) {
            Response.fail(res, Response.createError(Message.invalidToken));
        }
    },

    matchPassword: ({ notMatchThrow = false, message }) => {
        return async (req, res, next) => {
            const srvRes = await userService.matchPassword({ _id: req?.__cuser?._id, ...req.body });
            if (!srvRes.status && notMatchThrow) {
                Response.fail(res, Response.createError(message || Message.invalidCredentials));
            } else {
                next();
            }
        }
    },

    checkIfEmailAlreadyExists: ({ foundThrow = false, notFoundThrow = false }) => {
        return async (req, res, next) => {
            const srvRes = await userService.emailAlreadyExist({ _id: req?.__cuser?._id, ...req.body });
            if (srvRes.status && foundThrow) {
                Response.fail(res, Response.createError(Message.emailAlreadyExist));
            } else if (!srvRes.status && notFoundThrow) {
                Response.fail(res, Response.createError(Message.accoutDoesNotExistError));
            } else {
                next();
            }
        }
    },

    checkIfUserNameAlreadyExists: ({ foundThrow = false, notFoundThrow = false }) => {
        return async (req, res, next) => {
            const srvRes = await userService.userNameAlreadyExist({ _id: req?.__cuser?._id, ...req.body });
            if (srvRes.status && foundThrow) {
                Response.fail(res, Response.createError(Message.userNameAlreadyExist));
            } else if (!srvRes.status && notFoundThrow) {
                Response.fail(res, Response.createError(Message.accoutDoesNotExistError));
            } else {
                next();
            }
        }
    },

    bothNewPasswordSame: ({ foundThrow = false, notFoundThrow = false }) => {
        return async (req, res, next) => {
            const srvRes = await userService.userNameAlreadyExist({ _id: req.__cuser._id, ...req.body });
            if (srvRes.status && foundThrow) {
                Response.fail(res, Response.createError(Message.userNameAlreadyExist));
            } else if (!srvRes.status && notFoundThrow) {
                Response.fail(res, Response.createError(Message.accoutDoesNotExistError));
            } else {
                next();
            }
        }
    }

};