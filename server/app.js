var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var usersRouter = require('./routes/users');
var flightsRouter = require('./routes/flights');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api/users', usersRouter);
app.use('/api', flightsRouter);

// catch 404 and forward to error handler
app.use(function (req, res) {
  res.status(404).send();
});

// error handler
app.use(function (err, req, res, next) {
  res.status(err.status || 500).send(err.message);
});

var mongoose = require('mongoose');
var secrets = require('./config/secrets');
var url = `mongodb://${secrets.dbUser}:${secrets.dbPassword}@ds139890.mlab.com:39890/afl-dev`;
mongoose.Promise = require('bluebird');
mongoose.connect(url, { promiseLibrary: require('bluebird') })
  .then(() => console.log('Connection to db succesful'))
  .catch((err) => console.error(err));

module.exports = app;
