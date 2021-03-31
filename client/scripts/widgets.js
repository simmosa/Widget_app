//=======================//
// widget class template //
//=======================//
// class NameWidget{
//     constructor(options = {}){
//         this.id = createWidget(options)
//         this.makeWidget()
//     }

//     makeWidget(){


//         let widgetDiv = document.querySelector(`[data-widgetID="${this.id}"]`)
//         widgetDiv.append(YOUR ELEMENTS)
//     }
// }


class CalculatorWidget{
    constructor(options = {}){
        this.id = createWidget(options)
        this.makeWidget()
    }

    makeWidget(){
        let input1 = document.createElement('input')
        let input2 = document.createElement('input')

        let plusSign = document.createElement('p')
        plusSign.textContent = '+'

        let answerText = document.createElement('p')

        let btn = document.createElement('button')
        btn.textContent = 'Add!'

        btn.addEventListener('click', () => {
            answerText.textContent = `${Number(input1.value) + Number(input2.value)}`
        })


        let widgetDiv = document.querySelector(`[data-widgetID="${this.id}"]`)

        widgetDiv.append(input1, plusSign, input2, answerText, btn)
    }
}

class ClockWidget{
    constructor(options = {}){
        this.id = createWidget(options)
        this.makeWidget()
    }

    makeWidget(){
        let widgetDiv = document.querySelector(`[data-widgetID="${this.id}"]`)
        initialiseClock(widgetDiv)
    }
}

class PhotoWidget{
    constructor(options = {}){
        this.id = createWidget(options)
        this.makeWidget()
    }

    makeWidget(){
        let widgetDiv = document.querySelector(`[data-widgetID="${this.id}"]`)

        initialisePhoto(widgetDiv)
    }
}

class CryptoWidget{
    constructor(options = {}){
        this.id = createWidget(options)
        this.makeWidget()
    }

    makeWidget(){
        let widgetDiv = document.querySelector(`[data-widgetID="${this.id}"]`)

        initialiseCryptoWidget(widgetDiv)
    }
}

class WeatherWidget{
    constructor(options = {}){
        this.id = createWidget(options)
        this.makeWidget()
    }

    makeWidget(){
        let widgetDiv = document.querySelector(`[data-widgetID="${this.id}"]`)

        initialiseWeather(widgetDiv)
    }
}

