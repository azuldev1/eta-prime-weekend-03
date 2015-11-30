var express = require('express');
var router = express.Router();
var memes = require('../public/data/memes.json');
var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Memes GEN' });
});

module.exports = router;
