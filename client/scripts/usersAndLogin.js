//////////////                                     //////////////////////
/////////////       login from and handlers       //////////////////////

const loginForm = document.querySelector('.login_form')
const loginEmailInput = document.querySelector('.login_email_input')
const loginPasswordInput = document.querySelector('.login_password_input')

function handleLogin(e) {
    e.preventDefault()

    axios.post('/api/sessions', { email: loginEmailInput.value, password: loginPasswordInput.value}).then(res => {
        if (res.data.login == 'success') {  
            displayWelcomeUser(res.data.name)
        }
    })
}

loginForm.addEventListener('submit', handleLogin)


///////////                                            ///////////////////
//////////          new user from and handler         ///////////////////

const signupForm = document.querySelector('.signup_form')
const firstNameInput = document.querySelector('.first_name_input')
const lastNameInput = document.querySelector('.last_name_input')
const emailInput = document.querySelector('.email_input')
const passwordInput = document.querySelector('.password_input')

function handleNewUser(e) {
    e.preventDefault()

    axios.post('/api/users', {
        firstName: firstNameInput.value, 
        lastName: lastNameInput.value, 
        email: emailInput.value, 
        password: passwordInput.value
    }).then(res => {
        displayWelcomeUser(res.data.name)         
    });  
}

signupForm.addEventListener('submit', handleNewUser)


///////////////                           ///////////////
//////////////      logout handler       ///////////////

const logoutBtn = document.querySelector('.logout-btn')

function handleLogout() {
    console.log("logout activated")
    // save the widgets that the user has enabled
    // saveUserState()
    axios.delete('/api/sessions', { widgets: "settings"}).then(res => {
        
        })

    displayLogoutState()
}

logoutBtn.addEventListener('click', handleLogout)


////////////////
///////////////      display functions

function displayWelcomeUser(name) { 
    //displays user name and hides login and signup
    const welcomeUserDiv = document.querySelector('.welcome-user-div')
    welcomeUserDiv.classList.remove('hide-logins-items')           
    let welcomeMessageH4 = document.createElement('h4')
    welcomeMessageH4.textContent = `Welcome, ${name}`
    welcomeUserDiv.prepend(welcomeMessageH4)

    const loginDiv = document.querySelector('.login-div')
    loginDiv.classList.add('hide-logins-items')
    const signupDiv = document.querySelector('.signup-div')
    signupDiv.classList.add('hide-logins-items')
}

function displayLogoutState() {
    //reset the display to no user logged in
    const welcomeUserDiv = document.querySelector('.welcome-user-div')
    welcomeUserDiv.classList.add('hide-logins-items')    
    welcomeUserDiv.removeChild(welcomeUserDiv.childNodes[0]);      

    const loginDiv = document.querySelector('.login-div')
    loginDiv.classList.remove('hide-logins-items')
    const signupDiv = document.querySelector('.signup-div')
    signupDiv.classList.remove('hide-logins-items')

    // clear the forms
    loginEmailInput.value = ""
    loginPasswordInput.value = ""
    firstNameInput.value = ""
    lastNameInput.value = ""
    emailInput.value = ""
    passwordInput.value = ""
}

function currentUser() {
    axios.get('/api/sessions',{}).then(res => {
        console.log('current user id is ' + res.data.loggedInUserId)
    })
}
 
function getUserWidgets() {
    axios.get('/api/users/widgets',{}).then(res => {
        console.log(res.data.savedWidgets)
    })
}





