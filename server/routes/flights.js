var express = require('express');
var router = express.Router();
var Flight = require('../models/flight');


/* GET flights. */
router.get('/users/:userId/flights', function (req, res, next) {
    Flight.find({ userId: req.params.userId }, function (err, flights) {
        if (err) return next(err);
        res.json(flights);
    });
});

/* POST flight. */
router.post('/users/:userId/flights', function (req, res, next) {
    console.log(req.params.userId);
    req.body.userId = req.params.userId;
    Flight.create(req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

module.exports = router;