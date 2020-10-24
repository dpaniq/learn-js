const products = `
    CREATE TABLE IF NOT EXISTS products (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name CHAR(30) UNIQUE
    )
`;

const dvd = `
    CREATE TABLE IF NOT EXISTS dvd (
        id INT AUTO_INCREMENT PRIMARY KEY,
        sku CHAR(20),
        name CHAR(30),
        price DECIMAL(5,2),
        size INT
    )
`;

const book = `
    CREATE TABLE IF NOT EXISTS book (
        id INT AUTO_INCREMENT PRIMARY KEY,
        sku CHAR(20) NOT NULL,
        name CHAR(30) NOT NULL,
        price DECIMAL (5,2) NOT NULL,
        size INT NOT NULL
    )
`;

const furniture = `
    CREATE TABLE IF NOT EXISTS furniture (
        id INT AUTO_INCREMENT PRIMARY KEY,
        sku CHAR(20) NOT NULL,
        name CHAR(30) NOT NULL,
        price DECIMAL(5,2) NOT NULL,
        height INT NOT NULL,
        width INT NOT NULL,
        length INT NOT NULL
    )
`;



const migration = {
    products,
    dvd,
    book,
    furniture
}

module.exports = migration
