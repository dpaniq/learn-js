const {Product} = require('./Product')

class Book extends Product {
    constructor(sku, name, price, weight) {
        super(sku, name, price);
        this._weight = weight
    }

    get weight() {
        return this._weight
    }

    set weight(weight) {
        this._weight = weight
    }

    createEmptyProduct() {

    }


    createProduct () {
        return { created: `
                <input type="checkbox">
                <h6>BK-${ this._sku }<h6/>
                <h4>${ this._name.toUpperCase() }</h4>
                <em>$ ${ parseFloat(this._price).toFixed(2) }</em>
                <strong>Weight: ${ this._weight } MB</strong>
        `}
    }
}


module.exports = {
    Book
}
