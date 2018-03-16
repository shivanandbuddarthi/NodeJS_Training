const mongoose = require('mongoose');

let Product = mongoose.model('Product', {
    productId: {
        type: Number,
        require: true
    }, productName: {
        type: String,
        require: true,
        trim: true
    }, productCode: {
        type: String,
        minLength: 8,
        maxLength: 8
    }, description: {
        type: String
    }, imageUrl: {
        type: String
    }, price: {
        type: Number,
        require: true
    }, starRating: {
        type: Number
    }, releaseData: {
        type: String
    }
});

module.exports = {
    Product
}