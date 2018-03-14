const productService = require('./product.service');

const filteredProducts = productService.filterProducts("rjs");
if (filteredProducts != null && filteredProducts != undefined) {
    productService.filterProducts("rjs").forEach(product => {
        console.log(product.print());
    });
}
