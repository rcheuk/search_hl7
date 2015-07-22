/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /suggestions              ->  index
 * POST    /suggestions              ->  create
 * GET     /suggestions/:id          ->  show
 * PUT     /suggestions/:id          ->  update
 * DELETE  /suggestions/:id          ->  destroy
 */

'use strict';

var _ = require('lodash');

// Get list of suggestions
exports.index = function(req, res) {
  res.json(['a', 'ab', 'c', 'cb']);
};
