//const mongoClient = require('mongodb').MongoClient; //OR

const { MongoClient } = require('mongodb');
let getProducts = () => {
    MongoClient.connect('mongodb://localhost:27017/productsdb', function (error, client) {
        if (error) {
            return console.log('unable to connect to the server' + error);
        }
        let db = client.db('productsdb');
        db.collection('products')
            .find({ productId: 1 })
            .toArray()
            .then(
                (data) => {
                    console.log(data);
                },
                (err) => {
                    console.log(err);
                });
        client.close();
    });
}

module.exports = { getProducts }