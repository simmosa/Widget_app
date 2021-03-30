let hamburgerIcon = document.querySelector('.hamburger-icon')
let sideBar = document.querySelector('.side-bar')
let trashCan = document.querySelector('.trash-can')
let mouseOverTrashCan = false;

hamburgerIcon.addEventListener('click', () => {
    sideBar.classList.toggle('nav-show')
})

function showTrashCan(){
    trashCan.classList.add('show-trash-can')
}

function hideTrashCan(){
    trashCan.classList.remove('show-trash-can')
}

function setDragEnterTrashCan(){
    console.log('mouse drag on trashcan')
    trashCan.classList.add('drag-on-trash-can')
    mouseOverTrashCan = true
}

function setDragLeaveTrashCan(){
    console.log('mouse drag out trashcan')
    trashCan.classList.remove('drag-on-trash-can')
    mouseOverTrashCan = false
}