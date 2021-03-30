const express = require('express')
const app = express()

const usersController = require('./controllers/usersController.js')

const { Pool } = require('pg')
const pool = new Pool({ database: 'wizard'})

const port = 8080;

// app.use(express.bodyParser());

app.set('view engine', 'ejs'); // need to npm i ejs
app.set('views','./views');

app.use(express.static('client'))

app.use(express.json()) // assigns req.body

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})



app.post('/api/sessions', usersController.newSession)

app.post('/api/users', usersController.create)


app.patch('/users/:id')
app.delete('/users/:id')



// app.get('/index', (req, res) => {
//     pool.query('SELECT * FROM users;', [], (err, db) => {
//         // console.log(db.rows[0].first_name)
//         res.render('test_index', {userName: db.rows[0].first_name})
//     })
// })

// app.post('/sessions', (req, res) => {
//     console.log(req.params)
//     res.json({feedback: "made it to sessions"})
// })


// app.get('/users', (req, res) => {
    
//     res.render('login')
// })
// res.render('/test_index', {userName: userName} )

// console.log("made it to sessions post")
// pool.query('SELECT * FROM users Where email = $1;', [req.params.id], (err, dbResponse) => {
    // pool.query('SELECT * FROM users;', [], (err, db) => {
        // res.json(db.rows)
    //     let returnVal = db.row
    // console.log(returnVal)
    // res.json(dbResponse.rows)
    // res.json({
    //     message: 'sucess',
    //     userName: 'db'})
        // res.render('/test_index', {userName: db})
// })

// app.post('/users', (req, res) => {
    //     console.log("made it to users post")
    //     console.log(req.params.first_name + " name")
    // pool.query(
        //     'INSERT INTO users (first_name, last_name, email, password) VALUES ($1, $2, $3, $4) returning *', [req.body.first_name, req.body.last_name, req.body.email, req.body.password], (err, db) => {
    //         res.json({
    //             message: 'sucess',
    //             user: db.rows[0]
    //     })
    // })

 // create new user
    // res.render('test_index')
// })