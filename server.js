const express = require('express')
<<<<<<< HEAD
const session = require('express-session')
=======

const session = require('express-session')

>>>>>>> login and create user working.. fetching jad's addition to bcrypt
const usersController = require('./controllers/usersController.js')

const app = express()

const port = 8080;

<<<<<<< HEAD
app.use(session({ secret: 'keyboard cat', cookie: { maxAge: null }}))
=======
app.use(session({ secret: 'keyboard cat', cookie: { maxAge: 60000 }}))
>>>>>>> login and create user working.. fetching jad's addition to bcrypt

// app.use(express.bodyParser());

app.set('view engine', 'ejs');
app.set('views','./views');

app.use(express.static('client'))

app.use(express.json())

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})



app.post('/api/sessions', usersController.newSession)

app.post('/api/users', usersController.create)

app.patch('/users/:id')
app.delete('/users/:id')

