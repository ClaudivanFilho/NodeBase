var express = require('express');
var router = express.Router();
//var User = require('../models/user.model.js');

router.get('/user', function(req, res, next) {
  res.json(req.user);
});

module.exports = router;
