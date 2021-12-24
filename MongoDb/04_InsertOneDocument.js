let MongoClient = require("mongodb").MongoClient;
let url = "mongodb://localhost:27017";

MongoClient.connect(url, function(err, db) {
    if(err) throw err;
    let dbo = db.db("dbfromcode");
    let col = "users";

    let insQry = { name: "company inc.,", address: "highway 23" };
    dbo.collection(col).insertOne(insQry, function(err, res) {
        if(err) throw err;
        console.log("1 document inserted!");
        db.close();
    });
});