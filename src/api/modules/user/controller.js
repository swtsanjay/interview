const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const userService = require('../../../services/user');
const Response = require('../../../utilities/Response');
const Message = require('../../../utilities/Message');
const config = require('../../../config');

class controller {
    static async signup(req, res) {
        try {
            const response = { data: null, message: Message.signupError.message, code: Message.signupError.code };
            const srvRes = await userService.save(req.body);
            if (srvRes.status) {
                response.message = Message.signupSuccess.message;
                response.code = Message.signupSuccess.code;
            }
            Response.success(res, response);
        } catch (err) {
            Response.fail(res, Response.createError(Message.signupError, err));
        }
    }

    static async login(req, res) {
        try {
            const response = { data: null, message: Message.loginError.message, code: Message.loginError.code };
            const srvRes = await userService.getDetails(req.body);

            const JWT_EXP_DUR = config.jwt.expDuration;
            const accessToken = jwt.sign({ userId: srvRes.data._id.toString(), exp: Math.floor(Date.now() / 1000) + ((JWT_EXP_DUR) * 60), }, config.jwt.secretKey);
            response.data = { accessToken };
            response.status = true;

            response.message = Message.loginSuccess.message;
            response.code = Message.loginSuccess.code;
            Response.success(res, response);
        } catch (err) {
            Response.fail(res, Response.createError(Message.dataFetchingError, err));
        }
    }

    static async updateProfile(req, res) {
        try {
            const response = { data: null, message: Message.profileSavingError.message, code: Message.profileSavingError.code };
            const srvRes = await userService.save({ _id: req.__cuser._id, ...req.body });
            if (srvRes.status) {
                response.data = {
                    firstName: srvRes.data.firstName,
                    lastName: srvRes.data.lastName,
                    userName: srvRes.data.userName,
                    email: srvRes.data.email
                };
                response.message = Message.profileSaved.message;
                response.code = Message.profileSaved.code;
            }
            Response.success(res, response);
        } catch (err) {
            Response.fail(res, Response.createError(Message.profileSavingError, err));
        }
    }

    static async updatePassword(req, res) {
        try {
            const response = { data: null, message: Message.passwordUpdationError.message, code: Message.passwordUpdationError.code };
            const srvRes = await userService.updatePassword({ _id: req.__cuser._id, ...req.body });
            if (srvRes.status) {
                response.message = Message.passwordUpdated.message;
                response.code = Message.passwordUpdated.code;
            }
            Response.success(res, response);
        } catch (err) {
            Response.fail(res, Response.createError(Message.passwordUpdationError, err));
        }
    }

    static async getProfileData(req, res) {
        try {
            const response = { data: null, message: Message.dataFetchingError.message, code: Message.dataFetchingError.code };
            const srvRes = await userService.getDetails({ _id: req.__cuser._id });
            if (srvRes.status) {
                response.data = {
                    firstName: srvRes.data.firstName,
                    lastName: srvRes.data.lastName,
                    userName: srvRes.data.userName,
                    email: srvRes.data.email
                };
                response.message = Message.dataFound.message;
                response.code = Message.dataFound.code;
            }
            Response.success(res, response);
        } catch (err) {
            Response.fail(res, Response.createError(Message.dataFetchingError, err));
        }
    }
}

module.exports = controller;