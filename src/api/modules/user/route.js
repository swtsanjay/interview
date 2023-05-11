const { Router } = require('express');
const controller = require('./controller');
const validation = require('../../validators/user');
const { validateToken, checkIfEmailAlreadyExists, checkIfUserNameAlreadyExists, matchPassword } = require('../../middlewares/user');
const Message = require('../../../utilities/Message');

const router = Router({ mergeParams: true });
/* Public Routes */
router.post('/signup', validation.signup, checkIfEmailAlreadyExists({ foundThrow: true }), checkIfUserNameAlreadyExists({ foundThrow: true }), controller.signup);
router.post('/login', validation.login, checkIfEmailAlreadyExists({ notFoundThrow: true }), matchPassword({ notMatchThrow: true }), controller.login);

/* Private Routes */
router.use(validateToken);
router.get('/details', controller.getProfileData);
router.put('/update', checkIfEmailAlreadyExists({ foundThrow: true }), checkIfUserNameAlreadyExists({ foundThrow: true }), controller.updateProfile);
router.put('/update-password', validation.changePassword, matchPassword({ notMatchThrow: true, message: Message.currentPasswordWrong }), controller.updatePassword);

module.exports = router;