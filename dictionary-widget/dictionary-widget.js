
function createDictionaryInterface() {
    dictionaryWidgetHTML = `
        <div class="dictionary-container">  
            <form action="" class="dictionary-word-search">
                <input type="text" class="dictionary-search-input">
            </form>
            <div class="word-container">
                <p class="dictionary-word">test</p>
                <p class="dictionary-word-meaning">test</p>
                <p class="dictionary-synonym">test</p>
                <p class="dictionary-word-synonym">test</p>
            </div>
        </div>
    `

    let dictionaryWidget = document.createElement('div')
    dictionaryWidget.classList.add('dictionary-widget')
    dictionaryWidget.innerHTML = dictionaryWidgetHTML
    document.body.append(dictionaryWidget)
}

createDictionaryInterface()

// function createTime(widgetDiv) {
    
//     let d = new Date()
//     let hours = d.getHours()
//     let minutes = d.getMinutes()
//     let seconds = d.getSeconds()
    
//     minutes = minutes.toString()
//     if (minutes.length === 1) {
//         minutes = "0" + minutes
//     }
    
//     seconds = seconds.toString()
//     if (seconds.length === 1) {
//         seconds = "0" + seconds
//     }
    
//     clockWidgetHTML = `
//             <div class="time">
//                 <div class="time-hours">
//                     <p class="p-hours">${hours}</p>
//                 </div>
//                 <div class="time-break">
//                     <p class="p-break">:</p>
//                 </div>
//                 <div class="time-mins">
//                     <p class="p-mins">${minutes}</p>
//                 </div>
//                 <div class="time-break">
//                     <p class="p-break">:</p>
//                 </div>
//                 <div class="time-secs">
//                     <p class="p-secs">${seconds}</p>
//                 </div>
//             </div>
//         `

//     let clockWidget = document.createElement('div')
//     clockWidget.classList.add('clock-widget')
//     clockWidget.innerHTML = clockWidgetHTML
//     widgetDiv.append(clockWidget)

// }

// function initialiseClock(widgetDiv) {
//     createTime(widgetDiv)
//     setTimeout(getTime, 1000);
// }

// const getTime = function(){

//     const pHours = document.querySelector('.p-hours')
//     const pMins = document.querySelector('.p-mins')
//     const pSecs = document.querySelector('.p-secs')

//     let d = new Date()
//     let hours = d.getHours()
//     let minutes = d.getMinutes()
//     let seconds = d.getSeconds()

//     minutes = minutes.toString()
//     if (minutes.length === 1) {
//         minutes = "0" + minutes
//     }

//     seconds = seconds.toString()
//     if (seconds.length === 1) {
//         seconds = "0" + seconds
//     }

//     pHours.textContent = hours
//     pMins.textContent = minutes
//     pSecs.textContent = seconds
//     setTimeout(getTime, 1000);
// };
