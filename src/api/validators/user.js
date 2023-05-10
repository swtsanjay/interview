const { check } = require('express-validator');
const bcrypt = require('bcryptjs');
const { formValidation } = require('../middlewares/others');

const validations = {

    signup: [
        check('firstName')
            .notEmpty().withMessage("First name is required"),

        check('lastName')
            .notEmpty().withMessage("Lasr name is required"),

        check('userName')
            .notEmpty().withMessage("User name is required")
            .isSlug().withMessage("User name is not valid"),

        check('email')
            .notEmpty().withMessage("First name is required")
            .isEmail().withMessage("Email is not valid"),

        check('password')
            .notEmpty().withMessage("Password is required"),

        formValidation
    ],

    login: [
        check('email')
            .notEmpty().withMessage('Email is required')
            .isEmail().withMessage("Please enter valid email"),

        check('password')
            .notEmpty().withMessage("Password is required"),

        formValidation
    ],

    changePassword: [
        check('password')
            .notEmpty().withMessage('Current password is required'),

        check('newPassword')
            .notEmpty().withMessage("New password is required"),

        check('confirmNewPassword')
            .notEmpty().withMessage("Confirm new password is required"),
            // .custom((value, {req})=>{
            //     if(req.body.newPassword !== req.body.confirmNewPassword){
            //         throw new Error('Both new password does not match');
            //     }
            // }),

        formValidation
    ],

}

module.exports = validations;