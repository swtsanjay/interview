const expressLoader = require('./express');
const mongoose =  require('./mongoose');

const loader = async function ({ expressApp, server }){
	await mongoose();
	console.log('DB loaded and connected!');

	await expressLoader({ app: expressApp });
	console.log('Express loaded');
};

module.exports = loader;