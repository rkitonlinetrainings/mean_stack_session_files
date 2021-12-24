let MongoClient = require("mongodb").MongoClient;
let url = "mongodb://localhost:27017";

MongoClient.connect(url, function(err, db) {
    if(err) throw err;
    let dbo = db.db("dbfromcode");
    let col = "users";

    let insQry = [
        { _id: 154, name: "richard", address: "sky st 74"}
    ];

    dbo.collection(col).insertMany(insQry, function(err, res) {
        if(err) throw err;
        console.log("the number of documents inserted: " + res.insertedCount);
        db.close();
    });
});