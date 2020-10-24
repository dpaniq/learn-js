const {db} = require('./mysql/mysql')

// todo Delete from here
// Initialization Database Tables
// const db = new Database('test1', 'localhost', 'test', 'test', 3333)
// db.connect()
// db.initializationDatabase(tables)

const {Dvd} = require('./classes/Dvd')
const {Book} = require('./classes/Book')
const {Furniture} = require('./classes/Furniture')


// Get Products

function getAllProducts() {
    const query = `SELECT * FROM products`

    const products = new Promise (resolve => {
        return resolve(db.select(query))

    })

    products.then(data => console.log('123', data)) //.map(product => console.log(product.name))
}

// Create Products

function createDvdProduct(request) {
    const dvd = new Dvd(request.sku, request.name, request.price, request.size)
    db.insertIntoTable(dvd.appendProductIntoDB())
    console.log(':::OK OMG:::')
    return dvd.createProduct()
}

// initializationDatabase()
//
// const mysql      = require('mysql');
// // const connection = mysql.createConnection({
// //     host     : 'localhost',
// //     user     : 'test',
// //     password : 'test'
// // });
//
//
// var con = mysql.createConnection({
//     host: "localhost",
//     user: "test",
//     password: "test",
//     database: "test1",
//     port: 3333
// });
// // //
// // // // export default connection
// // //
// con.connect();
// //
// // console.log('MYSQL WAS CONNECTED')
// //
// // con.query('SELECT * FROM name', function(err, rows, fields) {
// //     console.log(err)
// //     for (const n of Object.values(rows)) {
// //         console.log('this is _', n.name)
// //     }
// // });
// //
// // con.query('INSERT INTO name (name) VALUES (\'Company Inc\')')
// // con.query('INSERT INTO name (name) VALUES (\'Company Inc2\')')
// // con.query('INSERT INTO name VALUES (\'Company Inc3\')')
// //
// // con.query('SELECT * FROM name', function(err, rows, fields) {
// //     console.log(err)
// //     for (const n of Object.values(rows)) {
// //         console.log('this is _', n.name)
// //     }
// // });
// //
//
// var sql = "CREATE TABLE IF NOT EXISTS customers (name VARCHAR(255), address VARCHAR(255))";
//
//
// con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("Table created");
// });
//
// con.end();


// todo use here?
// Initialization Database Tables
// const db = new Database('test1', 'localhost', 'test', 'test', 3333)
// db.connect()
// db.initializationDatabase(tables)

module.exports = {
    getAllProducts,
    createDvdProduct
}
