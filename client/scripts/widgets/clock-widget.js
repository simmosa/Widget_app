function createTime(widgetDiv) {
    
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
    widgetDiv.append(clockWidget)

}

function initialiseClock(widgetDiv) {
    createTime(widgetDiv)
    setTimeout(getTime, 1000);
}

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
