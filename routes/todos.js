const {Router}=require('express')
const Todo = require('../models/todo')
const router = Router()

router.get('/', async (req,res) =>{
    const todos  = await Todo.find({}).lean()

    res.render('index', {
        title: 'Toto list',
        isIndex: true,
        todos
    })
})

router.get('/create', (req, res) => {
    res.render('create', {
        title: 'Create todo',
        isCreate: true
    })
})

module.exports = router