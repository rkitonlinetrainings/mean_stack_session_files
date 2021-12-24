let MongoClient = require("mongodb").MongoClient;
let url = "mongodb://localhost:27017";

MongoClient.connect(url, function(err, db) {
    if(err) throw err;
    let dbo = db.db("dbfromcode");
    let col = "users";
    dbo.collection(col).findOne({}, function(err, res) {
        if(err) throw err;
        console.log("name: " + res.name);
        console.log("address: " + res.address);
        db.close();
    });
});