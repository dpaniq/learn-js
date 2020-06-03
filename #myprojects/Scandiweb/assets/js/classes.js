class Products {
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

class Dvd extends Products {
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
                <h6>DVD-${ this._sku }<h6/>
                <h4>${ this._name.toUpperCase()}</h4>
                <em>$ ${ parseFloat(this._price).toFixed(2) }</em>
                <strong>Size: ${ this._size } MB</strong>
                <div class="product__product-backgound"></div>
        `}
    }
}

class Book extends Products {
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

    createProduct () {
        return { created: `
                <h6>BK-${ this._sku }<h6/>
                <h4>${ this._name.toUpperCase() }</h4>
                <em>$ ${ parseFloat(this._price).toFixed(2) }</em>
                <strong>Weight: ${ this._weight } MB</strong>
                <div class="product__product-backgound"></div>
        `}
    }
}

class Furniture extends Products {
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

    createProduct () {
        const [x,y,z] = Object.values(this._dimension);

        return { created: `
                <h6>FRN-${ this._sku }<h6/>
                <h4>${ this._name.toUpperCase() }</h4>
                <em>$ ${ parseFloat(this._price).toFixed(2) }</em>
                <strong>Dimension: ${ x }x${ y }x${ z }</strong>
                <div class="product__product-backgound"></div>
        `}
    }
}

const classes = [Dvd, Book, Furniture]

// export {
//     Dvd,
//     Book,
//     Furniture,
//     // classes
// }

module.exports = {
    Dvd,
    Book,
    Furniture,
    // classes
}


// Skolko subclassov - stolko i optionsov
// Creaters in classes methods ?

//
// const x = new Furniture('f_1', 'Furniture one', 90, {height: 30, width: 40, length: 50});
// console.log(x.dimension)
// x.dimension = {height:19, width:19, length:19}
// console.log(x.dimension)
