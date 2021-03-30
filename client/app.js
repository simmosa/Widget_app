let p = document.createElement('p')
p.textContent = "Test app is connected"
document.body.appendChild(p)


const loginForm = document.querySelector('.login_form')

const loginEmailInput = document.querySelector('.login_email_input')
const loginPasswordInput = document.querySelector('.login_password_input')




const newUserForm = document.querySelector('.new_user_form')

const firstNameInput = document.querySelector('.first_name_input')
const lastNameInput = document.querySelector('.last_name_input')
const emailInput = document.querySelector('.email_input')
const passwordInput = document.querySelector('.password_input')


function handleNewUser(e) {
    e.preventDefault()

    axios.post('/api/users', {firstName: firstNameInput.value, lastName: lastNameInput.value, email: emailInput.value, password: passwordInput.value}).then(res => {
        let result = document.createElement('p')
        result.textContent = res.data
        document.body.appendChild(result)
    })
}

newUserForm.addEventListener('submit', handleNewUser)