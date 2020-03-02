// @Владилен Минин https://www.youtube.com/watch?v=8bE_PBRriyU&t=1s

const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const ehb = require('express-handlebars');
const todoRoutes = require('./routes/todos.js')


const PORT = process.env.PORT || 3000

const app = express()
const hbs = ehb.create({
    defaultLayout: 'main',
    extname: 'hbs',
})

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views')

app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname, '/public')))

app.use(todoRoutes)

async function start() {
    try {
        await mongoose.connect('mongodb+srv://dpaniq:d080494q@cluster0-6q4qf.mongodb.net/todos', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
            

    app.listen(PORT, () => {
        console.log('Server has been started')
    })
    } catch (e) {
        console.log(e)
    }
}


start() 