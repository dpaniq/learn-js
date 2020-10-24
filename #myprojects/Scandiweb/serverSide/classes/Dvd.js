const {Product} = require('./Product')


class Dvd extends Product {
    constructor(sku, name, price, size) {
        super(sku, name, price);
        this._size = size
    }

    get size() {
        return this._size
    }

    set size(size) {
        this._size = size
    }

    createProduct () {
        return { created: `
                <input type="checkbox">
                <h6>DVD-${ this._sku }<h6/>
                <h4>${ this._name.toUpperCase()}</h4>
                <em>$ ${ parseFloat(this._price).toFixed(2) }</em>
                <strong>Size: ${ this._size } MB</strong>
        `}
    }

    appendProductIntoDB () {
        return `
            INSERT INTO dvd (sku, name, price, size)
            VALUES (${this.sku}, ${this.name}, ${this.price}, ${this.size})
        `
    }
}

module.exports = {
    Dvd
}
