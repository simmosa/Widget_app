let hamburgerIcon = document.querySelector('.hamburger-icon')
let sideBar = document.querySelector('.side-bar')
let trashCan = document.querySelector('.trash-can')
let mouseOverTrashCan = false;
let overlayOn = true;


hamburgerIcon.addEventListener('click', () => {
    if(overlayOn){
        document.querySelector('.page-overlay').remove()
        overlayOn = false;
    }
    sideBar.classList.toggle('nav-show')
    hamburgerIcon.classList.toggle('nav-active')
})

function showTrashCan(){
    trashCan.classList.add('show-trash-can')
}

function hideTrashCan(){
    trashCan.classList.remove('show-trash-can')
    trashCan.classList.remove('drag-on-trash-can')
}

function setDragEnterTrashCan(){
    trashCan.classList.add('drag-on-trash-can')
    mouseOverTrashCan = true
}

function setDragLeaveTrashCan(){
    trashCan.classList.remove('drag-on-trash-can')
    mouseOverTrashCan = false
}