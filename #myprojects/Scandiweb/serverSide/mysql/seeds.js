const productsSeeds = `INSERT INTO products (name) VALUES ?`
const productsSeedsValues = [
    ['dvd'],
    ['book'],
    ['furniture']
]

const seed = [
    {name: 'product', query: productsSeeds, values: productsSeedsValues}
]

module.exports = seed
