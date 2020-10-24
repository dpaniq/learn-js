const {Product} = require('./Product')

class Furniture extends Product {
    constructor(sku, name, price, dimension) {
        super(sku, name, price);
        this._dimension = dimension
    }

    get dimension() {
        return this._dimension
    }

    set dimension(dimension) {
        this._dimension = {
            height: dimension.height,
            width: dimension.width,
            length: dimension.length,
        }
    }

    createEmptyProduct() {
        return {empty: [
                `<input type="number" name="width" placeholder="0 (width cm)" required>`,
                `<input type="number" name="height" placeholder="0 (height cm)" required>`,
                `<input type="number" name="length" placeholder="0 (length cm)" required>`,
                `<p>Please provide dimensions in H (height) x W (weight) x L (length) format</p>`
            ]}
    }

    createProduct () {
        const [x,y,z] = Object.values(this._dimension);

        return { created: `
                <input type="checkbox">
                <h6>FRN-${ this._sku }<h6/>
                <h4>${ this._name.toUpperCase() }</h4>
                <em>$ ${ parseFloat(this._price).toFixed(2) }</em>
                <strong>Dimension: ${ x }x${ y }x${ z }</strong>
        `}
    }
}

module.exports = {
    Furniture
}
