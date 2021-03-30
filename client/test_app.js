//////////////                                     //////////////////////
/////////////       login from and handlers       //////////////////////

const loginForm = document.querySelector('.login_form')
const loginEmailInput = document.querySelector('.login_email_input')
const loginPasswordInput = document.querySelector('.login_password_input')

function handleLogin(e) {
    e.preventDefault()

    axios.post('/api/sessions', { email: loginEmailInput.value, password: loginPasswordInput.value}).then(res => {
        let result = document.createElement('p')
        result.textContent = res.data
        document.body.appendChild(result)
    })
}

loginForm.addEventListener('submit', handleLogin)


///////////                                            ///////////////////
//////////          new user from and handler         ///////////////////

const newUserForm = document.querySelector('.new_user_form')
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
        let result = document.createElement('p')
        result.textContent = `user id is ${res.data.user.id}`
        document.body.appendChild(result)
          
    });  
}

newUserForm.addEventListener('submit', handleNewUser)


