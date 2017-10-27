'use strict';

var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

exports = module.exports = function(app) {
	app.db = mongoose.connect(app.config.mongoURL, {
		//promiseLibrary: global.Promise,
		useMongoClient: true
	})
	.then(() => {
	    console.log('Connected correctly to server');
	    return mongoose.connection;
	})
	.catch(err => console.error.bind(console, 'connection error:'));
};