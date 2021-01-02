const express = require("express")
const mongoose = require("mongoose")
const exphbs = require("express-handlebars")
const conf = require ('./config.json')
const todoRoutes = require('./routes/todos.js')

const PORT = process.env.PORT || 3000
// const login=conf.login
// const pass=conf.pass

const app = express()
const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
})

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views')

app.use(todoRoutes)

async function start(){
    try{
        await mongoose.connect(
            'mongodb+srv://alex:2012@cluster0.o4aom.mongodb.net/shop?retryWrites=true&w=majority',
            {
            useNewUrlParser: true,
            useFindAndModify: false
        })
        app.listen(PORT, () => {
        console.log('\n==Server has been started==')
})
    }
    catch(e){
        console.log(e)

    }
}

start()

