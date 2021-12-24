let MongoClient = require("mongodb").MongoClient;
let url = "mongodb://localhost:27017";

MongoClient.connect(url, function(err, db) {
    if(err) throw err;
    let dbo = db.db("dbfromcode");
    let col = "users";
    dbo.dropCollection(col, function(err, del) {
        if(err) throw err;
        if(del) console.log("collection dropped successfull!");
        db.close();
    })
});