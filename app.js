var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var app = express();

// Start: Initialze basic configuration for project
require('./server/config')(app);
// Start: Initialze basic configuration for project

// Start: Connection to the Database
require('./server/connection')(app);
// End: Connection to the Database

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'client/public')));

// Start: Serve all the API routes
app.use('/api', require('./server/routes/router'));
// End: Serve all the API routes

// Start: Serve AngularJS
app.use('/[^\.]+$', function(req, res, next) {
	// Start: Send 404 if request is JSON and route not found
	if(req.xhr || req.headers.accept.indexOf('json') > -1) {
		var err = new Error("Not Found");
		err.status = 404;
		next(err);
	}
	// End: Send 404 if request is JSON and route not found
	else {
		res.set('Content-Type', 'text/html').sendFile(path.join(__dirname + '/client/public/index.html'));
    }
});
// End: Serve AngularJS

// Start: error handler
app.use(function(err, req, res, next) {
	console.log(err);
	if(req.xhr || req.headers.accept.indexOf('json') > -1) {
		res.status(err.status || 500);
		res.json({
			message: err.message,
			error: (app.get('env') === 'development' ? err : {})
		});
	} else {
		res.sendFile(path.join(__dirname, 'client/public/static/'+(err.status || 500)+'.html'));
	}
});
// End: error handler

module.exports = app;
