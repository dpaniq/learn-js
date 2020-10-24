// todo Rename server Express -> change entrypoint in package.json

const path = require('path')
const bodyParser = require('body-parser')
const express = require('express')
const exphbs = require('express-handlebars')
const appRoute = require('./serverSide/router')

const PORT = process.env.PORT || 3000

const app = express()
const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
})

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', './serverSide/views')

app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({    // to support URL-encoded bodies
    extended: true
}));

app.use(express.static(__dirname + '/clientSide/assets'));
app.use(appRoute)


app.listen(PORT, () => {
    console.log(`Server has been started...\nGo to 'http://localhost:${PORT}'`)
})
