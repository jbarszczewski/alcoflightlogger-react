var express = require('express');
var router = express.Router();
var Flight = require('../models/flight');
var mongoose = require('mongoose');

/* GET flights. */
router.get('/users/:userId/flights', function (req, res, next) {
    Flight.find({ userId: req.params.userId }, function (err, flights) {
        if (err) return next(err);
        res.json(flights);
    });
});

/* GET last flight. */
router.get('/users/:userId/lastFlight', function (req, res, next) {
    Flight.findLast(req.params.userId, function (err, flight) {
        if (err) return next(err);
        res.json(flight);
    });
});

/* POST flight. */
router.post('/users/:userId/flights', function (req, res) {
    req.body.userId = req.params.userId;
    Flight.create(req.body, function (err, flight) {
        if (err) return res.send(err);
        res.json(flight);
    });
});

/* POST stop. */
router.post('/flights/:flightId/stops', function (req, res, next) {
    Flight.findByIdAndUpdate(req.params.flightId,
        { $push: { "stops": req.body } },
        { safe: true, upsert: true, new: true },
        function (err, flight) {
            if (err) return res.send(err);
            res.json(flight)
        });
});

module.exports = router;