
function displayCryptoPrice() {

    let crypto = axios.get('https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC&tsyms=USD').then(req, res => {
        console.log(res.data)
    })

    cryptoWidgetHTML = `
    <div>
        <div class="crypto-id">
            <p class="image"></p>
            <img src="" alt="">
        </div>
        <div class="crypto-price">
            <p class="price"></p>
        </div>
        <div class="crypto-day-high">
            <p class="day-high"></p>
        </div>
        <div class="crypto-day-low">
            <p class="day-low"></p>
        </div>
    </div>
    `
}



function createTime() {
    
    let d = new Date()
    let hours = d.getHours()
    let minutes = d.getMinutes()
    let seconds = d.getSeconds()
    
    minutes = minutes.toString()
    if (minutes.length === 1) {
        minutes = "0" + minutes
    }
    
    seconds = seconds.toString()
    if (seconds.length === 1) {
        seconds = "0" + seconds
    }
    
    clockWidgetHTML = `
            <div class="time">
                <div class="time-hours">
                    <p class="p-hours">${hours}</p>
                </div>
                <div class="time-break">
                    <p class="p-break">:</p>
                </div>
                <div class="time-mins">
                    <p class="p-mins">${minutes}</p>
                </div>
                <div class="time-break">
                    <p class="p-break">:</p>
                </div>
                <div class="time-secs">
                    <p class="p-secs">${seconds}</p>
                </div>
            </div>
        `

    let clockWidget = document.createElement('div')
    clockWidget.classList.add('clock-widget')
    clockWidget.innerHTML = clockWidgetHTML
    document.body.append(clockWidget)

}

createTime()

const getTime = function(){

    const pHours = document.querySelector('.p-hours')
    const pMins = document.querySelector('.p-mins')
    const pSecs = document.querySelector('.p-secs')

    let d = new Date()
    let hours = d.getHours()
    let minutes = d.getMinutes()
    let seconds = d.getSeconds()

    minutes = minutes.toString()
    if (minutes.length === 1) {
        minutes = "0" + minutes
    }

    seconds = seconds.toString()
    if (seconds.length === 1) {
        seconds = "0" + seconds
    }

    pHours.textContent = hours
    pMins.textContent = minutes
    pSecs.textContent = seconds
    setTimeout(getTime, 1000);
};

setTimeout(getTime, 1000);