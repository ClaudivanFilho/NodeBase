var express = require('express');
var path = require('path');
var router = express.Router();
var passport = require('passport');
var User = require('../models/user.model.js');
//var Populate = require('../models/populate.js');

router.get('/', function(req, res, next) {
  res.redirect('/login');
});

router.get('/home', function(req, res, next) {
  return res.sendFile(path.join(__dirname+'/../public/index.html'));
});

router.get('/user', function(req, res, next) {
  res.json(req.user);
});

router.get('/backdoor', function(req, res, next) {
  User.remove({}, function() {
  });
  return res.send("Database Reseted");
});

module.exports = router;
