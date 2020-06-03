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

export class Dvd extends Products {
    constructor(sku, name, price, size) {
        super(sku, name, price);
        this._size = size
    }

    get size() {
        return this._size
    }

    set size(size) {
        this._price = size
    }
}

export class Book extends Products {
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
}

export class Furniture extends Products {
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
}



//
// const x = new Furniture('f_1', 'Furniture one', 90, {height: 30, width: 40, length: 50});
// console.log(x.dimension)
// x.dimension = {height:19, width:19, length:19}
// console.log(x.dimension)
