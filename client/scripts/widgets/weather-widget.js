weatherIcons = {
    '01d': './images/icons/clear_sky_icon.png',
    '02d': './images/icons/few_clouds.png',
    '03d': './images/icons/cloud_icon.png',
    '04d': './images/icons/broken_clouds_icon.png',
    '09d': './images/icons/shower_rain.png',
    '10d': './images/icons/rain_icon.png',
    '11d': './images/icons/thunderstorm_icon.png',
    '13d': './images/icons/snow_icon.png',
    '50d': './images/icons/mist_icon.png',
    '01n': './images/icons/clear_sky_icon.png',
    '02n': './images/icons/few_clouds.png',
    '03n': './images/icons/cloud_icon.png',
    '04n': './images/icons/broken_clouds_icon.png',
    '09n': './images/icons/shower_rain.png',
    '10n': './images/icons/rain_icon.png',
    '11n': './images/icons/thunderstorm_icon.png',
    '13n': './images/icons/snow_icon.png',
    '50n': './images/icons/mist_icon.png',
}

var settingActive = false;

function updateWeatherContent (res) {
    let location = document.querySelector('.location')
    let descrip = document.querySelector('.descrip')
    let temp = document.querySelector('.temp')
    let weatherIcon = document.querySelector('.weather-icon')

    weatherIcon.src = weatherIcons[res.data.weather[0].icon]

    location.textContent = res.data.name
    descrip.textContent = res.data.weather[0].main
    temp.textContent = Math.round(res.data.main.temp) + "°"
}

function findLocation () {

    moment.tz.guess();
    let timezone = moment.tz.guess()
    timezone = timezone.split('/')
    timezone.shift()
    let city = timezone.join('')
    return city
}

function weatherRequest (location) {

    if (location === undefined) {
        location = findLocation() || location
    }
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=369cf59ff46be34ddd9a191263f37b53&units=metric`).then(res => {
        updateWeatherContent(res)
    })
}

function createWeatherWidget(widgetDiv) {
    weatherWidgetHTML = `
        <div class="search-form hidden">
            <form action="" class="location-form">
                <input type="text" onfocus="this.value=''" onfocusout="this.value='Enter a city...'" value="Enter a city...">
            </form>
        </div>
        <div class="weather-container">
            <div class="weather-logo">
                <img class="weather-icon" src="" alt="">
                <span class="material-icons settings-icon">settings</span>            
            </div>
            <div class="weather-info">
                <p class="location">Loading...</p>
                <p class="descrip"></p>
                <p class="temp">00°</p>
            </div>
        </div>
    `

    weatherWidget = document.createElement('div')
    weatherWidget.classList.add('weather-widget')
    weatherWidget.innerHTML = weatherWidgetHTML
    widgetDiv.append(weatherWidget)

    weatherRequest()

    settingsBtn = document.querySelector('.settings-icon')

    settingsBtn.addEventListener('click', () => {
        if (settingActive === false) {
            let searchForm = document.querySelector('.search-form')
            searchForm.classList.remove('hidden')
    
            settingActive = true
        } else if (settingActive) {
            let searchForm = document.querySelector('.search-form')
            searchForm.classList.add('hidden')
    
            settingActive = false
        }
    })

    locationForm = document.querySelector('.location-form')

    locationForm.addEventListener('submit', (event) => {
        event.preventDefault()
    
        let inputValue = event.currentTarget.querySelector('input').value
        let location = inputValue

        weatherRequest(location)
    
        let searchForm = document.querySelector('.search-form')
        searchForm.classList.add('hidden')
    
        settingActive = false
    
    })
}

function initialiseWeather(widgetDiv) {
    createWeatherWidget(widgetDiv)
}
