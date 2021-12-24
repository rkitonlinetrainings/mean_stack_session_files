let MongoClient = require("mongodb").MongoClient;
let url = "mongodb://localhost:27017";

MongoClient.connect(url, function(err, db) {
    if(err) throw err;
    let dbo = db.db("dbfromcode");
    let col = "users";
    let qry = { address: "park lane 34" }
    dbo.collection(col).find(qry).toArray(function(err, res) {
        if(err) throw err;
        console.log(res);
        db.close();
    });
});