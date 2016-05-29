var express = require('express');
var path = require('path');
var router = express.Router();
//var Book = require('../models/book.model.js');
//var Populate = require('../models/populate.js');

router.get('/', function(req, res, next) {
  return res.sendFile(path.join(__dirname+'/../public/index.html'));
});

router.get('/backdoor', function(req, res, next) {
  //Book.remove(function() {
  //  Populate.books();
  //});
  return res.send("Database Reseted");
});

module.exports = router;
