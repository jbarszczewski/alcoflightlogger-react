var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var userRouter = require('./routes/user');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api/user', userRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  res.status(404);
  res.send();
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
});

var mongoose = require('mongoose');
var secrets = require('./config/secrets');
var url = `mongodb://${secrets.dbUser}:${secrets.dbPassword}@ds139890.mlab.com:39890/afl-dev`;
mongoose.Promise = require('bluebird');
mongoose.connect(url, { promiseLibrary: require('bluebird') })
  .then(() =>  console.log('Connection to db succesful'))
  .catch((err) => console.error(err));

module.exports = app;
