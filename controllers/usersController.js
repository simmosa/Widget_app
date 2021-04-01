const { Pool } = require('pg')
const pool = new Pool({ database: 'wizard'})

const bcrypt = require('bcrypt');
const saltRounds = 10;

let pool;
if (process.env.PRODUCTION) {
  pool = new Pool({
    connectionString: process.env.DATABASE_URL,
  })
} else {
  pool = new Pool({
    database: 'wizard'
  })



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

    // // delete previous widget entry in database
    // pool.query('DELETE FROM userWidgets WHERE id = $1', [req.session.user_id], () => {
    //     //return message if needed
    //     // res.json({ message: `deleted`})
    // })

    // // add new widgets entry to save the current loaded widgets
    // pool.query(
    //     'INSERT INTO userWidgets (user_id, widgets) VALUES($1, $2)', [req.session.user_id, req.body.widgets], (err, db) =>{
    //         //return something if we like
    //     }
    // )

    //destroy the session
    req.session.destroy()
}

function createUser(req,res) {
    bcrypt.genSalt(saltRounds, function(err, salt) { 
        bcrypt.hash(req.body.password, salt, function(err, passwordDigest) {
            pool.query(
                'INSERT INTO users (first_name, last_name, email, password) VALUES ($1, $2, $3, $4) returning *', [req.body.firstName, req.body.lastName, req.body.email, passwordDigest], (err, db) => {
                    req.session.user_id = db.rows[0].id
                    res.json( {user: db.rows[0], name: db.rows[0].first_name} )
            })
        }); 
    }); 
}


function getUsersWidgets(req,res) {
    // gives the widgets of the session user
    pool.query('SELECT * FROM userswidgets WHERE user_id = $1;', [req.session.user_id], (err, db) => {
        if (db.rows.length > 0) {
            res.json({savedWidgets: db.rows[0].widgets})
        }
    })
}

function createUsersWidgets(req, res) {
    //first we delete the previous entry in the table for the user then add the updated one.
    pool.query('DELETE FROM userswidgets WHERE user_id = $1;', [req.session.user_id], (err, db) =>{})

    let usersWidgets = JSON.stringify(req.body.userSave)
    pool.query('INSERT INTO userswidgets (user_id, widgets) VALUES ($1, $2)', [req.session.user_id, usersWidgets], (err, db) => {
        res.json({message: "user widgets saved sucessfully"})
    })
}

module.exports = {
    userLoggedIn,
    newSession,
    endSession,
    createUser,
    getUsersWidgets,
    createUsersWidgets
}