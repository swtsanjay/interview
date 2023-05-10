const express = require('express');
const path = require('path');
require('dotenv/config');
const config = require('./config');
const initLoader = require('./loaders');

global.appRoot = path.resolve(__dirname);



process.on('uncaughtException', function (error) {
	console.log(error.message);
});

(async () => {
	try {
		const app = express();
		// app.use(require('cors')({origin: '*'}));
		app.use(express.static(path.join(__dirname, '..', 'public')));
		const server = app.listen(config.port, err => {
			if (err) {
				process.exit(1);
				return;
			}
		});

		await initLoader({ expressApp: app, server });
	} catch (err) {
		// Deal with the fact the chain failed
		console.log(err.message);
	}
})();

