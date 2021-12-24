let MongoClient = require("mongodb").MongoClient;
let url = "mongodb://localhost:27017";

MongoClient.connect(url, function(err, db) {
    if(err) throw err;
    let dbo = db.db("dbfromcode");
    let col = "users";
    let qry = { _id: 154 };
    let newData = { $set: { name: "abc", address: "mkoqsc bgruhv" } };
    dbo.collection(col).updateOne(qry, newData, function(err, res) {
        if(err) throw err;
        console.log("1 document updated");
        db.close();
    })
});