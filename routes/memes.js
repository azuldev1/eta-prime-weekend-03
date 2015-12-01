var express = require('express');
var router = express.Router();
var memes = require('../data/memes.json');
var comments = require('../data/comments.json');




/* GET Memes. */
router.get('/', function(req, res, next) {
  console.log(comments);
  res.render('memes', {data:memes, com:comments});

});

module.exports = router;
