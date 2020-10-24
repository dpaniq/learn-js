const {getAllProducts, createDvdProduct} = require('./service')

const {Dvd} = require('./classes/Dvd')
const {Book} = require('./classes/Book')
const {Furniture} = require('./classes/Furniture')


const {Router} = require('express')
const router = Router()

// get
router.get('/', (req, res) => {
    res.render('product', {
        title: 'Product'
    })
    getAllProducts()
})

router.get('/create', (req, res) => {
    console.log(req, res)
    res.render('create', {
        title: 'Create'
    })
})

// Create Product
router.post('/create/dvd/', (req, res) => {
    const dvd = new Dvd(req.body.sku, req.body.name, req.body.price, req.body.size)
    res.send(dvd.createProduct())
    createDvdProduct(req.body)
})

router.post('/create/book/', (req, res) => {
    const book = new Book(req.body.sku, req.body.name, req.body.price, req.body.size)
    res.send(book.createProduct())
})

router.post('/create/furniture/', (req, res) => {
    console.log('FUR', req.body)
    const furniture = new Furniture(req.body.sku, req.body.name, req.body.price,
        {width: req.body.width, height: req.body.height, length: req.body.length})

    res.send(furniture.createProduct())
})

// Empty template
router.post('/product/dvd/', (req, res) => {
    res.send({empty: [
        `<input type="number" name="size" placeholder="0" required>`,
        `<p>Type a size of DVD disk (MB)</p>`
    ]})
})

router.post('/product/book/', (req, res) => {
    res.send({empty: [
        `<input type="text" name="weight" placeholder="0">`,
        `<p>Type a weight of Book (kg)</p>`
    ]})
})

router.post('/product/furniture/', (req, res) => {
    res.send({empty: [
        `<input type="number" name="width" placeholder="0 (width cm)" required>`,
        `<input type="number" name="height" placeholder="0 (height cm)" required>`,
        `<input type="number" name="length" placeholder="0 (length cm)" required>`,
        `<p>Please provide dimensions in H (height) x W (weight) x L (length) format</p>`
    ]})
})

module.exports = router
