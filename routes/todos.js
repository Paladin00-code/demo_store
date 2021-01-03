const { Router } = require('express')
const Todo = require('../models/Todo')
const router = Router()

<<<<<<< HEAD
router.get('/', async (req, res) => {
  const todos = await Todo.find({}).lean()
=======
router.get('/', async (req,res) =>{
    const todos  = await Todo.find({}).lean()
>>>>>>> 5c0759d9bf0fdf53077f8a316c277da37f2eed49

  res.render('index', {
    title: 'Todos list',
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

router.post('/create', async (req, res) => {
  const todo = new Todo({
    title: req.body.title
  })

  await todo.save()
  res.redirect('/')
})

router.post('/complete', async (req, res) => {
  const todo = await Todo.findById(req.body.id)

  todo.completed = !!req.body.completed
  await todo.save()

  res.redirect('/')
})

module.exports = router
