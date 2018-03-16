const { Product } = require('../models/product.model');
const { mongoose } = require('./product.mongoose');

let getProducts = (callback) => {
    Product.find().then(
        (data) => {
            if (data)
                callback(data, undefined)
        },
        (error) => {
            if (error)
                callback(undefined, error)
        }
    )
}

let getProductById = (pid, callback) => {
    Product.findOne({ productId: pid }).then(
        data => callback(data),
        error => callback(undefined, error)
    );
}

let addProduct = (p, callback) => {

}

let deleteProduct = (pid, callback) => {

}

let updateProduct = (p, callback) => {
    Product.findOneAndUpdate({ productId: p.productId }, p).then(
        data => callback(data),
        error => callback(undefined, error)
    );
}

module.exports = {
    getProducts,
    getProductById,
    addProduct,
    updateProduct,
    deleteProduct
}