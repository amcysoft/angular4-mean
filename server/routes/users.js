'use strict';

exports = module.exports = function(router) {
	router.get('/', function(req, res, next) {
		res.status(200)
			.json({
				success: true
			});
	});
	// Add more routes in similar fashion
	return router;
};