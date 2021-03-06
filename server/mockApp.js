/* Define some initial variables. */
var applicationRoot = __dirname.replace(/\\/g, "/"),
  mockRoot = applicationRoot + '/mocks/api',
  mockFilePattern = '.json',
  mockRootPattern = mockRoot + '/**/*' + mockFilePattern,
  apiRoot = '/api',
  fs = require('fs'),
  glob = require('glob'),
  logger = require('morgan'),
  errorHandler = require('errorHandler');

/* Create Express application */
var express = require('express');
var mockApp = express();

/* Configure a simple logger and an error handler. */
mockApp.use(logger('dev'));
mockApp.use(errorHandler());

/* Read the directory tree according to the pattern specified above. */
var files = glob.sync(mockRootPattern);

/* Register mappings for each file found in the directory tree. */
if (files && files.length > 0) {
  files.forEach(function (fileName) {

    var mapping = apiRoot + fileName.replace(mockRoot, '').replace(mockFilePattern, '');

    mockApp.get(mapping, function (req, res) {
      var data = fs.readFileSync(fileName, 'utf8');
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.write(data);
      res.end();
    });

    console.log('Registered mapping: %s -> %s', mapping, fileName);
  })
} else {
  console.log('No mappings found! Please check the configuration.');
}

/* Start the API mock server. */
console.log('Application root directory: [' + applicationRoot + ']');

module.exports = mockApp;
