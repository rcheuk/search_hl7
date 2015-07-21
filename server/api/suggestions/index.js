'use strict';

var express = require('express');
var suggestions = require('./suggestions.controller');
var router = express.Router();

router.get('/suggestions', suggestions.index);

module.exports = router;
