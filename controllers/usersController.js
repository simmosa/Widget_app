const { Pool } = require('pg')
const pool = new Pool({ database: 'wizard'})
const bcrypt = require('bcrypt');
const saltRounds = 10;



function userLoggedIn(req, res) {
    //return the session user ID.
    res.json({loggedInUserId: req.session.user_id})
}

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

    // delete previous widget entry in database
    pool.query('DELETE FROM userWidgets WHERE id = $1', [req.session.user_id], () => {
        //return message if needed
        // res.json({ message: `deleted`})
    })

    // add new widgets entry to save the current loaded widgets
    pool.query(
        'INSERT INTO userWidgets (user_id, widgets) VALUES($1, $2)', [req.session.user_id, req.body.widgets], (err, db) =>{
            //return something if we like
        }
    )

    //destroy the session
    req.session.destroy(req.session.user_id)
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