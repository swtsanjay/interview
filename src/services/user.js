const bcrypt = require('bcryptjs');
const { Types } = require('mongoose');
const userModel = require('../models/user');
const { clearSearch } = require("../utilities/Helper");

class MasterService {
    static async save(data) {
        const response = { data: {}, status: false };
        try {
            const docData = data._id ? await userModel.findById(data._id) : new userModel();

            docData.firstName = data.firstName;
            docData.lastName = data.lastName;
            docData.userName = data.userName;
            docData.email = data.email;
            docData.password = data.password;

            await docData.save();

            response.data = docData;
            response.status = true;

            return response;
        } catch (err) {
            throw err;
        }
    }

    static async getDetails(data) {
        const response = { data: {}, status: false };
        const search = {
            _id: data._id ? Types.ObjectId(data._id) : '',
            email: data.email ? data.email : '',
            userName: data.userName ? data.userName : '',
        }

        clearSearch(search);

        try {
            const docData = await userModel.findOne(search);

            response.data = docData;
            response.status = true;

            return response;
        } catch (e) {
            throw e;
        }
    }

    static async updatePassword(data) {
        const response = { data: {}, status: false };
        const search = {
            _id: data._id ? Types.ObjectId(data._id) : '',
            email: data.email ? data.userName : '',
            userName: data.userName ? data.userName : '',
        }

        clearSearch(search);

        try {
            const docData = await userModel.findOne(search);

            docData.password = data.newPassword;

            await docData.save();

            response.data = docData;
            response.status = true;

            return response;

        } catch (err) {
            throw err;
        }
    }

    static async emailAlreadyExist(data) {
        const response = { data: {}, status: false };
        const search = {
            _id: data._id ? { $ne: Types.ObjectId(data._id) } : '',
            email: data.email ? data.email : '',
        }

        clearSearch(search);

        try {

            const docData = await userModel.findOne(search);

            response.data = docData;
            response.status = docData ? true : false;

            return response;

        } catch (err) {
            throw err;
        }
    }

    static async userNameAlreadyExist(data) {
        const response = { data: {}, status: false };
        const search = {
            _id: data._id ? { $ne: Types.ObjectId(data._id) } : '',
            userName: data.userName ? data.userName : '',
        }

        clearSearch(search);

        try {

            const docData = await userModel.findOne(search);

            response.data = docData;
            response.status = docData ? true : false;

            return response;

        } catch (err) {
            throw err;
        }
    }

    static async matchPassword(data) {
        const response = { data: {}, status: false };
        const search = {
            _id: data._id ? { $ne: Types.ObjectId(data._id) } : '',
            userName: data.userName ? data.userName : '',
        }

        clearSearch(search);

        try {

            const userData = (await this.getDetails(data)).data;

            let isPasswordMatched = await bcrypt.compare(data.password, userData.password);
            if (!isPasswordMatched) {
                response.status = false;
            } else {
                response.status = true;
            }

            return response;

        } catch (err) {
            throw err;
        }
    }


}

module.exports = MasterService;