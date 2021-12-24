let MongoClient = require("mongodb").MongoClient;
let url = "mongodb://localhost:27017/dbfromcode";

MongoClient.connect(url, function(err, db) {
    if(err) throw err;
    console.log("database created successful!");
    db.close();
});