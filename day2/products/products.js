const Product = require('./product');

module.exports.products = [
    new Product.Product(1, "NodeJs", 1.99, "This is product1"),
    new Product.Product(2, "AngularJs", 2.99, "This is product2"),
    new Product.Product(3, "EmberJs", 3.99, "This is product3"),
    new Product.Product(4, "PolymerJs", 4.99, "This is product4"),
]
