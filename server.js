const express = require('express')
const app = express()

const usersController = require('./controllers/usersController.js')

const port = 8080;

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

