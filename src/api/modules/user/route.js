const { Router } = require('express');
const controller = require('./controller');
const validation = require('../../validators/user');
const { validateToken, checkIfEmailAlreadyExists, checkIfUserNameAlreadyExists, matchPassword } = require('../../middlewares/user');
const Message = require('../../../utilities/Message');

const router = Router({ mergeParams: true });

router.post('/signup', validation.signup, checkIfEmailAlreadyExists({ foundThrow: true }), checkIfUserNameAlreadyExists({ foundThrow: true }), controller.signup);
router.post('/login', validation.login, checkIfEmailAlreadyExists({ notFoundThrow: true }), matchPassword({ notMatchThrow: true }), controller.login);
router.get('/details', validateToken, controller.getProfileData);
router.post('/update', validateToken, checkIfEmailAlreadyExists({ foundThrow: true }), checkIfUserNameAlreadyExists({ foundThrow: true }), controller.updateProfile);
router.post('/update-password', validateToken, validation.changePassword, matchPassword({ notMatchThrow: true, message: Message.currentPasswordWrong }), controller.updatePassword);

module.exports = router;