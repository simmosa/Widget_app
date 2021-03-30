
function displayCryptoPrice() {

    axios.get('https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC&tsyms=USD').then(res => {
        let cryptoResults = res.data.DISPLAY.BTC.USD
        let cryptoName = cryptoResults.FROMSYMBOL
        let cryptoImage = cryptoResults.IMAGEURL
        let cryptoPrice = cryptoResults.PRICE
        let cryptoDayHigh = cryptoResults.HIGHDAY
        let cryptoDayLow = cryptoResults.LOWDAY
        let cryptoDayChange = cryptoResults.CHANGEPCT24HOUR
        console.log(cryptoResults)
        
        cryptoWidgetHTML = `
                    <div>
                        <div class="crypto-id">
                            <img src="https://www.cryptocompare.com/${cryptoImage}" class="crypto-image">
                            <span class="name">${cryptoName}</span>
                        </div>
                        <div class="crypto-price">
                            <span class="crypto-value-descriptor">Current price: </span>
                            <span class="price">${cryptoPrice}</span>
                        </div>
                        <div class="crypto-day-high">
                            <span class="crypto-value-descriptor">24 hour high: </span> 
                            <span class="day-high">${cryptoDayHigh}</span>
                        </div>
                        <div class="crypto-day-low">
                            <span class="crypto-value-descriptor">24 hour low: </span>
                            <span class="day-low">${cryptoDayLow}</span>
                        </div>
                        <div class="crypto-day-change">
                            <span class="crypto-value-descriptor">24 hour change: </span>
                            <span class="day-change">${cryptoDayChange}%</span>
                        </div>
                    </div>
                `

        let cryptoWidget = document.createElement('div')
        cryptoWidget.classList.add('crypto-widget')
        cryptoWidget.innerHTML = cryptoWidgetHTML
        document.body.append(cryptoWidget)
    })

}

displayCryptoPrice()
