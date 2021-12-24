let MongoClient = require("mongodb").MongoClient;
let url = "mongodb://localhost:27017";

MongoClient.connect(url, function(err, db) {
    if(err) throw err;
    let dbo = db.db("dbfromcode");
    let col = "users";
    let qry = { name: "amy" };
    dbo.collection(col).deleteMany(qry, function(err, res) {
        if(err) throw err;
        console.log("1 document deleted successfull");
        db.close();
    });
});