const mysql = require('mysql');
const migration = require('./migrations')
const seed = require('./seeds')

// function doSomething(name) {
//     console.log('Hello, ' + name);
// }
//
// function settingConnection(wrapped) {
//     return function() {
//         console.log('Starting');
//         const result = wrapped.apply(this, arguments);
//         console.log('Finished');
//         return result;
//     }
// }
//
// const wrapped = loggingDecorator(doSomething);

class Database {
    mysql = mysql
    migrations = migration
    seeds = seed
    connection

    constructor(database, host, user, password, port = 3333) {
        this.database = database
        this.host = host
        this.user = user
        this.password = password
        this.port = port
    }

    connect() {
        this.connection = this.mysql.createConnection({
            host: this.host,
            database: this.database,
            user: this.user,
            password: this.password,
            port: this.port
        })
        //     this.changeName = function (name) {
        //         this.lastName = name;
        //     };
        console.log(':::[Connect with database successful]')
    }

    migrate() {
        const promise = new Promise((resolve, reject) => {
            this.connection.connect(() => {
                    Object.entries(this.migrations).map(table => {
                        this.connection.query(table[1], (error, result) => {
                            if (error) throw error;
                            console.log(`:::[Table '${table[0]}' created]`)
                        })
                    })
                    return resolve()
                }
            )
        })

        // promise.then(() => this.seed()) // Only one time (TOdo FIX THIS)
    }


// Todo DECORATOR https://www.telerik.com/blogs/decorators-in-javascript


    seed() {
        this.connection.connect(() => {
            this.seeds.map(sd => {
                const [seedName, query, values] = [sd.name, sd.query, sd.values]
                this.connection.query(query, [values], (error, result) => {
                    if (error) throw error;
                    console.log(`:::[Seed '${seedName}' was added successfully]`)
                })

            })
        })
    }

    async select(query) {
        await this.connection.connect(() => {
            this.connection.query(query, (error, result) => {
                if (error) throw error
                console.log('VERNUL')
                return result
            })
        })
        // query('SELECT * FROM products', function(err, rows, fields) {
        //     console.log(err)
        //     for (const n of Object.values(rows)) {
        //         console.log('this is _', n.name)
        //     }
    }

// error(error) {
//     console.log('CHECK ERROR', error)
//     if (error) throw error
// }
}

// todo Delete from here
// Initialization Database Tables
const db = new Database('test1', 'localhost', 'test', 'test', 3333)
db.connect()
db.migrate()
// db.seed()


module.exports = {
    db
    // initializationDatabase
}

// SELECT


// connection.connect();
//
// connection.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
//     if (err) throw err;
//     console.log('The solution is: ', rows[0].solution);
// });
//
// connection.end();
