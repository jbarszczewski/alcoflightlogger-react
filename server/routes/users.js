var express = require('express');
var router = express.Router();
var User = require('../models/user');

/* GET login. */
router.post('/login', function (req, res, next) {
  User.findOne({ email: req.body.email }, function (err, user) {
    if (err) return next(err);
    res.json(user);
  })
});

/* POST user. */
router.post('/', function (req, res, next) {
  User.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;