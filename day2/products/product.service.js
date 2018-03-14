const Product = require('./product');
const products = require('./products');


getProducts = () => {
    return products.products;
}

checkProduct = (product, filterText) => product.name.toLowerCase().indexOf(filterText.toLowerCase()) !== -1;
isProductArrayEmpty = products => products === null || products === undefined || products.length === 0;

filterProducts = (filterText) => {
    let filteredProducts = [];
    const produtsCollection = products.products;
    if (isProductArrayEmpty(produtsCollection)) {
        return produtsCollection;
    }
    products.products.forEach(product => {
        checkProduct(product, filterText) ? filteredProducts.push(product) : null;
    });
    return filteredProducts;
}


module.exports = {
    getProducts,
    filterProducts
}