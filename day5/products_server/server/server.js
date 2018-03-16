const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const productController = require("../controller/product.controller");

const app = express();
const baseUrl = '/productService';

app.use(cors());
app.use(bodyParser.json());


/* URLs 
 /productService (POST)
 /productService (PUT)
 /productService (GET - all)
 /productService/id (GET - single product)
 /productService/id (DELETE)
 */
/* One way
app.get(baseUrl, productController.getProducts);
app.get(baseUrl + '/:pid', productController.getProductById);
app.get(baseUrl + '/:pid', productController.removeProductById);
*/

/*bBest way*/
app.route(baseUrl)
    .get(productController.getProducts)
    .post(productController.addProduct)
    .put(productController.updateProduct);

app.route(baseUrl + '/:pid')
    .get(productController.getProductById)
    .delete(productController.removeProductById);

let server = app.listen(9000, () => {
    console.log(`
    host is running at http://localhost:${server.address().port}${baseUrl}
    `);
});