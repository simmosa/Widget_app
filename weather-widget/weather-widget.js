weatherIcons = {
    '01d': './icons/clear_sky_icon.png',
    '02d': './icons/few_clouds.png',
    '03d': './icons/cloud_icon.png',
    '04d': './icons/broken_clouds_icon.png',
    '09d': './icons/shower_rain_icon.png',
    '10d': './icons/rain_icon.png',
    '11d': './icons/thunderstorm_icon.png',
    '13d': './icons/snow_icon.png',
    '50d': './icons/mist_icon.png',
    '01n': './icons/clear_sky_icon.png',
    '02n': './icons/few_clouds.png',
    '03n': './icons/cloud_icon.png',
    '04n': './icons/broken_clouds_icon.png',
    '09n': './icons/shower_rain_icon.png',
    '10n': './icons/rain_icon.png',
    '11n': './icons/thunderstorm_icon.png',
    '13n': './icons/snow_icon.png',
    '50n': './icons/mist_icon.png',
}

var settingActive = false;

axios.get('https://api.openweathermap.org/data/2.5/weather?q=Adelaide&appid=369cf59ff46be34ddd9a191263f37b53&units=metric').then(res => {

    let location = document.querySelector('.location')
    let descrip = document.querySelector('.descrip')
    let temp = document.querySelector('.temp')
    let weatherIcon = document.querySelector('.weather-icon')

    weatherIcon.src = weatherIcons[res.data.weather[0].icon]

    location.textContent = res.data.name
    descrip.textContent = res.data.weather[0].main
    temp.textContent = Math.round(res.data.main.temp) + "°"
})

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


