var express = require('express');
var router = express.Router();
const mongoClient = require('mongodb').MongoClient;

const url = 'mongodb://<dbuser>:<dbpassword>@ds139890.mlab.com:39890/afl-dev';
const dbName = 'afl-dev';
const collectionName = 'users';

/* GET user. */
router.get('/', function(req, res, next) {  

  mongoClient.connect(url, function(err, client) {
    if(err) {
      res.json(err);
      return;
    }
    console.log("Connected successfully to server");
  
    const db = client.db(dbName);
    const collection = db.collection(collectionName);
    collection.find({}).toArray(function(err, docs) {
      if(err) {
        res.json(err);
        return;
      }

      console.log("Found the following records");
      console.log(docs)
      res.json(docs);
    });
    client.close();
  });
});

module.exports = router;