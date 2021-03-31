const { Pool } = require('pg')
const pool = new Pool({ database: 'wizard'})
const bcrypt = require('bcrypt');
const saltRounds = 10;



function userLoggedIn(req, res) {}

function newSession(req, res) {
    pool.query('SELECT * FROM users Where email = $1;', [req.body.email], (err, db) => {
        if (db.rows.length<1) { 
            res.json( { login: 'no email match' })
        } else {
            (bcrypt.compare(req.body.password, db.rows[0].password, function(err, result) {
                if (result == true) {
                    req.session.user_id = db.rows[0].id
                    res.json({ login: 'success', name: `${db.rows[0].first_name}`})
                } else if (result == false) {
                    res.json({ login: 'password incorrect' })
                }
            }))
        } 
    })
}

function endSession(req, res) {
    // save the loaded widgets
    //destroy the session
    // req.session.destroy()
}

function createUser(req,res) {
    bcrypt.genSalt(saltRounds, function(err, salt) { 
        bcrypt.hash(req.body.password, salt, function(err, passwordDigest) {
            pool.query(
                'INSERT INTO users (first_name, last_name, email, password) VALUES ($1, $2, $3, $4) returning *', [req.body.firstName, req.body.lastName, req.body.email, passwordDigest], (err, db) => {
                    res.json( {user: db.rows[0], name: db.rows[0].first_name} )
            })
        }); 
    }); 
}


module.exports = {
    userLoggedIn,
    newSession,
    endSession,
    createUser
}