'use strict';

exports = module.exports = function(app) {
	app.config = {
		'secretKey': process.env.secretKey || 'SECRET_KEY_FOR_MONGO',
		'mongoURL': process.env.mongoURL || 'YOUR_MONGO_URL'
	};
};