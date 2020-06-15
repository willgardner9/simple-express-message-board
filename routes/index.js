var express = require('express');
var router = express.Router();
var moment = require('moment');
const messages = require('../api/data');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini messages', messages: messages });
});

module.exports = router;