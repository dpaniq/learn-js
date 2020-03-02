const { Router } = require('express')
const Todo = require('../models/Todo')
const router = Router()



router.get('/', async (req, res, next) => {

    const todosLean = await Todo.find().lean()

    res.render('index', {
        title: 'Todos list',
        isIndex: true,
        todosLean
    })
})

router.get('/create', (req, res, next) => {
    res.render('create', {
        title: 'Create Todos',
        isCreate: true
    })
    
})

router.post('/create', async (req, res) => {
    // console.log('-------------------------------------------')
    // console.log('REQUEST: ',  req)
    // console.log('-------------------------------------------')
    // console.log('RESPONSE: ', res)
    // console.log('-------------------------------------------')
    // console.log('req.body.title: ',  req.body.title)

    const todo = new Todo({
        title: req.body.title,
    })

    await todo.save()
    res.redirect('/')
})

router.post('/complete', async (req, res) => {

    // console.log(req)
    const todo = await Todo.findById(req.body.id)
    // todo.completed = !!req.body.completed
    todo.completed = Boolean(req.body.completed)
    await todo.save()

    res.redirect('/')
})

module.exports = router