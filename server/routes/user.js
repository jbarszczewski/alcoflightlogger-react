var express = require('express');
var router = express.Router();
var User = require('../models/user');


/* GET user. */
router.get('/:email', function(req, res, next) {      
  User.findOne({email: req.params.email}, function(err, users) {
    if(err) return next(err);
    res.json(users);
  })
});

/* POST user. */
router.post('/', function(req, res, next) {
  User.create(req.body, function(err, post){
    if(err) return next(err);
    res.json(post);
  });
});

module.exports = router;