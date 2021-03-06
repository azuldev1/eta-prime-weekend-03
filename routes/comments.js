var express = require('express');
var router = express.Router();
var comments = require('../data/comments.json');
var fs = require('fs');
var path = require('path');

/* Router allows for fetching of comments matching
  the meme form submitted. Sends an array of the comments
  or an empty one if meme is not found.*/
router.get('/:id?', function(req, res, next) {
  if (req.params.id !== undefined) {
    var matchedComments = [];
    for (var i = 0; i < comments.length; i++) {
      if (comments[i].imageId === req.params.id) {
        matchedComments.push(comments[i]);
      }
    }
    res.send(matchedComments);
  } else {
    res.send([]);
  }
});

/* Router to write to the comments.json file. Creates object that is pushed to
  comments array if its properties are defined. Writes new comments array to
  json file, overwriting previous contents.
  */
router.post('/', function(req, res, next) {
  var newComment = {imageId: req.body.imageId, message: req.body.message};
  if (newComment.imageId && newComment.message) {
    comments.push(newComment);
    var string = JSON.stringify(comments);
    var filePath = path.join(__dirname, '../data/comments.json');

    fs.writeFile(filePath, string, function(err) {
      if (err) {
        // if there is an error, "next" middleware will handle it.
        // Next in our case is the error handler in app.js
        next(err);
      } else {
        // it's all good! Send the object back.
        res.send(newComment);
      }
    });
  }
});

module.exports = router;
