class Product {
    constructor(id, name, price, desc) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.desc = desc;
    }

    print() {
        return `
        ${this.id}. ${this.name}->${this.price}
        Description: ${this.desc}
        `
    }
}


module.exports = {
    Product
}