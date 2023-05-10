const HttpStatus = require('http-status-codes');

module.exports = {

	badRequest: {
		name: 'Bad Request',
		message: 'Some Error Occurred!',
		code: HttpStatus.StatusCodes.BAD_REQUEST
	},

	internalServerError: {
		name: 'Internal server error',
		message: 'Internal server error',
		code: HttpStatus.StatusCodes.INTERNAL_SERVER_ERROR
	},

	accoutDoesNotExistError: {
		name: 'Account does not exists',
		message: 'Any account does not exist with this email',
		code: HttpStatus.StatusCodes.BAD_REQUEST
	},

	signupError: {
		name: 'Signup Error',
		message: 'Account can not be created',
		code: HttpStatus.StatusCodes.BAD_REQUEST
	},

	signupSuccess: {
		name: 'Signup Success',
		message: 'Account created successfully',
		code: HttpStatus.StatusCodes.OK
	},

	emailAlreadyExist: {
		name: 'Email Already Exists',
		message: 'This email already exists',
		code: HttpStatus.StatusCodes.BAD_REQUEST
	},

	userNameAlreadyExist: {
		name: 'User Name Already Exists',
		message: 'This user name already exists',
		code: HttpStatus.StatusCodes.BAD_REQUEST
	},

	invalidCredentials: {
		name: 'Login Error',
		message: 'Invalid credentials',
		code: HttpStatus.StatusCodes.BAD_REQUEST
	},

	currentPasswordWrong: {
		name: 'Worong Password',
		message: 'Current password is wrong',
		code: HttpStatus.StatusCodes.BAD_REQUEST
	},

	loginError: {
		name: 'Login Error',
		message: 'Can not login',
		code: HttpStatus.StatusCodes.BAD_REQUEST
	},

	loginSuccess: {
		name: 'Login Success',
		message: 'Loggedin successfully',
		code: HttpStatus.StatusCodes.OK
	},

	profileSavingError: {
		name: "Profile Updation Error",
		message: 'Can not update profile',
		code: HttpStatus.StatusCodes.BAD_REQUEST
	},

	profileSaved: {
		name: "Profile Updation",
		message: 'Profile updated successfully',
		code: HttpStatus.StatusCodes.OK
	},

	passwordUpdationError: {
		name: "Password Updation Error",
		message: 'Can not update password',
		code: HttpStatus.StatusCodes.BAD_REQUEST
	},

	passwordUpdated: {
		name: "Password Updated",
		message: 'Password updated successfully',
		code: HttpStatus.StatusCodes.OK
	},

	dataFetchingError: {
		name: "Data Fetching Error",
		message: 'Error while data fetching',
		code: HttpStatus.StatusCodes.BAD_REQUEST
	},

	dataFound: {
		name: "Data Found",
		message: 'Data fetched successfully',
		code: HttpStatus.StatusCodes.OK
	},

	dataSavingError: {
		name: "Data Saving Error",
		message: 'Error while data saving',
		code: HttpStatus.StatusCodes.BAD_REQUEST
	},

	dataSaved: {
		name: "Data Saved",
		message: 'Data saved successfully',
		code: HttpStatus.StatusCodes.OK
	},

	invalidToken: {
		name: "Token Invalid",
		message: 'Invalid token!. Please login again',
		code: HttpStatus.StatusCodes.UNAUTHORIZED
	},
}