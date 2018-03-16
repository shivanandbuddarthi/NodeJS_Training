const productDB = require('../dao/productDb');

let getProducts = (req, res) => {
    console.log(`${req.method} ${req.url}... now it came to the new controller`);
    //res.send('Welcome to API');
    productDB.getProducts(
        (data, error) => {
            error && res.status(400).send(error);
            data && res.status(200).send(data)

        }
    );
}

let getProductById = (req, res) => {
    console.log(`${req.method} ${req.url}`);
    let pid = parseInt(req.params.pid);
    productDB.getProductById(pid, (data, error) => {
        if (error) {
            console.log(error);
            res.send(error);
        }
        if (data !== undefined && data !== null) {
            console.log(data);
            res.send(data);
        } else {
            res.send('No data exists...');
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
    console.log(`${req.method} ${req.url}`);

    let p = req.body;
    console.log(p);
    productDB.updateProduct(p, (data, error) => {
        if (error) {
            console.log(error);
            res.send(error);
        }
        if (data !== undefined && data !== null) {
            console.log(data);
            res.send(data);
        } else {
            res.send('No data exists...');
        }

    });
}

module.exports = {
    getProducts,
    getProductById,
    removeProductById,
    addProduct,
    updateProduct
}