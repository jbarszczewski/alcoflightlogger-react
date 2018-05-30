var express = require('express');
var router = express.Router();

/* GET user. */
router.get('/', function(req, res, next) {  
  res.json({ id: 7, name: 'you' });
});

module.exports = router;