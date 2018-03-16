const dao = require('../dao/productDao');

let getProducts = (req, res) => {
    console.log(`${req.method} ${req.url}`);
    //res.send('Welcome to API');
    dao.getProducts(
        (data, error) => {
            error && res.status(400).send(error);
            data && res.status(200).send(data)

        }
    );
}

let getProductById = (req, res) => {
    console.log(`${req.method} ${req.url}`);
    let pid = parseInt(req.params.pid);
    dao.getProductById(pid, (data, error) => {
        if (error) {
            console.log(error);
            res.send(error);
        }
        if (data) {
            console.log(data);
            res.send(data);
        }

    });
}

let removeProductById = (req, res) => {
    res.send("called remove...");
}

let addProduct = (req, res) => {
    res.send("called add...");
}

let updateProduct = (req, res) => {
    res.send("called update...");
}

module.exports = {
    getProducts,
    getProductById,
    removeProductById,
    addProduct,
    updateProduct
}