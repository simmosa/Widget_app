const { Pool } = require('pg')
const pool = new Pool({ database: 'wizard'})
const bcrypt = require('bcrypt');
const saltRounds = 10;

function newSession(req, res) {
    pool.query('SELECT * FROM users Where email = $1;', [req.body.email], (err, db) => {
        (bcrypt.compare(req.body.password, db.rows[0].password, function(err, result) {
            if (result == true) {
                res.json("correct user credentials and logged in.")
            } else {
                res.json("incorrect credentials provided.")
            }
        }))    
    })
}

function create(req,res) {
    bcrypt.genSalt(saltRounds, function(err, salt) { 
        bcrypt.hash(req.body.password, salt, function(err, passwordDigest) {
            pool.query(
                'INSERT INTO users (first_name, last_name, email, password) VALUES ($1, $2, $3, $4) returning *', [req.body.firstName, req.body.lastName, req.body.email, passwordDigest], (err, db) => {
                    res.json( {user: db.rows[0]} )
            })
        }); 
    }); 
}

module.exports = {
    newSession,
    create
}

