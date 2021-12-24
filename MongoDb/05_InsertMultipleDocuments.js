let MongoClient = require("mongodb").MongoClient;
let url = "mongodb://localhost:27017";

MongoClient.connect(url, function(err, db) {
    if(err) throw err;
    let dbo = db.db("dbfromcode");
    let col = "users";

    let insQry = [
        { name: "amy", address: "apply st 23"}, 
        { name: "hannah", address: "mountain 35" }
    ];

    dbo.collection(col).insertMany(insQry, function(err, res) {
        if(err) throw err;
        console.log("the number of documents inserted: " + res.insertedCount);
        db.close();
    });
});