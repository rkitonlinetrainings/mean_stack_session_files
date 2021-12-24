let MongoClient = require("mongodb").MongoClient;
let url = "mongodb://localhost:27017";

MongoClient.connect(url, function(err, db) {
    if(err) throw err;
    let dbo = db.db("dbfromcode");
    dbo.createCollection("users", function(err, res) {
        if(err) throw err;
        console.log("collection created successful!");
        db.close(); 
    });
});