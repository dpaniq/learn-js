class Product {
    constructor(sku, name, price) {
        this._sku = sku
        this._name = name
        this._price = price
    }

    get sku() {
        return this._sku
    }

    get name() {
        return this._name
    }

    get price() {
        return this._price
    }

    set sku(sku) {
        this._sku = sku
    }

    set name(name) {
        this._name = name
    }

    set price(price) {
        this._price = price
    }
}

module.exports = {
    Product
}
