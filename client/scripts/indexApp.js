let hamburgerIcon = document.querySelector('.hamburger-icon')
let sideBar = document.querySelector('.side-bar')

hamburgerIcon.addEventListener('click', () => {
    sideBar.classList.toggle('nav-show')
    console.log(sideBar)
})