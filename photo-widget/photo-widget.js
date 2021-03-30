
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
document.body.append(photoWidget)

let refreshBtn = document.querySelector('.refresh-btn')

refreshBtn.addEventListener('click', event => {
    // let photo = document.querySelector('.photo')
    // photo.firstElementChild.src = 'https://source.unsplash.com/random/300x300'
    
    axios.get('https://source.unsplash.com/random/300x300').then((res) => {
        console.log(res.data.urls)
    })
    console.log("test")
    console.log(photo)
})

