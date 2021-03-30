function createPhoto(widgetDiv) {
    photoWidgetHTML = `
        <div class="photo-container">
            <div class="photo">
                <img src="https://source.unsplash.com/random/300x300" alt="">
            </div>
            <span class="refresh-btn material-icons md-36">
                cached
            </span>
        </div>
        `
    
    photoWidget = document.createElement('div')
    photoWidget.classList.add('photo-widget')
    photoWidget.innerHTML = photoWidgetHTML
    widgetDiv.append(photoWidget)
    
    let refreshBtn = document.querySelector('.refresh-btn')
    
    refreshBtn.addEventListener('click', () => {
        
        axios.get('https://source.unsplash.com/random/300x300').then((req, res) => {
            let photo = document.querySelector('.photo')
            photo.firstElementChild.src = req.request.responseURL
        })
    })
}

function initialisePhoto(widgetDiv) {
    createPhoto(widgetDiv)
}



