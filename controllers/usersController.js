const { Pool } = require('pg')
const pool = new Pool({ database: 'wizard'})


function newSession(req, res) {
    pool.query('SELECT * FROM users Where email = $1;', [req.body.email], (err, db) => {
        if ( db.rows[0].password === req.body.password ) {
            res.json("correct user credentials and logged in")
        }
    })
}


function create(req,res) {

    pool.query(
        'INSERT INTO users (first_name, last_name, email, password) VALUES ($1, $2, $3, $4) returning *', [req.body.firstName, req.body.lastName, req.body.email, req.body.password], (err, db) => {
            res.json( {user: db.rows[0]} )
    })
}

module.exports = {
    newSession,
    create
}