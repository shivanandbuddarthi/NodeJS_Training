//const mongoClient = require('mongodb').MongoClient; //OR

const { MongoClient } = require('mongodb');
let getProducts = (callback) => {
    MongoClient.connect('mongodb://localhost:27017/productsdb', function (error, client) {
        if (error) {
            console.log('unable to connect to the server' + error);
            callback(undefined, error);
        }
        let db = client.db('productsdb');
        db.collection('products')
            .find()
            .toArray()
            .then(
                (data) => {
                    console.log(data);
                    callback(data);
                },
                (err) => {
                    console.log(err);
                    callback(null, err);
                });
        /*client.close().then(
            (data)=>console.log("closed..."),
            (err)=>console.log(err)
        );*/
        client.close();
    });
}


let getProductById = (pid, callback) => {
    MongoClient.connect('mongodb://localhost:27017/productsdb', function (error, client) {
        if (error) {
            console.log('unable to connect to the server' + error);
            callback(undefined, error);
        }
        console.log("got the client...")
        let db = client.db('productsdb');
        db.collection('products')
            .find({ productId: pid })
            .toArray()
            .then(
                data => {
                    console.log("success " + data);
                    callback(data)
                },
                err => {
                    console.log(err);
                    callback(undefined, err)
                }
            );
        client.close();
    });
}


module.exports = {
    getProducts,
    getProductById
}