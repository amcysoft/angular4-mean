'use strict';

var express = require('express');
var router = express.Router();

// Start: Define all the server API routes
router.use('/users', require('./users')(router));
// End: Define all the server routes

module.exports = router;