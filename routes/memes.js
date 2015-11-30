var express = require('express');
var router = express.Router();
var memes = require('../data/memes.json');



/* GET Memes. */
router.get('/', function(req, res, next) {
  res.render('memes', {data:memes});

});

module.exports = router;
