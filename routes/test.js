var express = require('express');
var router = express.Router();
var comments = require('../data/comments.json');




/* GET Memes. */
router.get('/', function(req, res, next) {
  console.log(comments);
  res.render('test', {com:comments});

});

module.exports = router;
