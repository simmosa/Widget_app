let widgetIDCount = 0;

function createWidget(options = {}){
    widgetIDCount++;
    options.content = `<div data-widgetID="${widgetIDCount}"></div>`
    grid.addWidget(options)

    return widgetIDCount;
}

function saveWidgetProfileData(){
    let widgetsSaveProfile = grid.save()
    axios.post('/api/users/widgets', {userSave: widgetsSaveProfile}).then(res => {
        console.log('running save')
    })
}

function addSideBarWidgetBack(item){
    switch(item.gridstackNode.id){
        case 'calculatorWidget': document.querySelector('.sidebar-calculator-widget').classList.remove('hide-sidebar-widget');
        break;
        case 'clockWidget': document.querySelector('.sidebar-clock-widget').classList.remove('hide-sidebar-widget')
        break;
        case 'photoWidget': document.querySelector('.sidebar-photo-widget').classList.remove('hide-sidebar-widget')
        break;
        case 'cryptoWidget': document.querySelector('.sidebar-crypto-widget').classList.remove('hide-sidebar-widget')
        break;
        case 'weatherWidget': document.querySelector('.sidebar-weather-widget').classList.remove('hide-sidebar-widget')
        break;
    }
}

function loadUserWidgets(){
    //axios request
    grid.removeAll();
    axios.get('/api/users/widgets', {}).then(res => {
        console.log(res.data.savedWidgets)
        widgets = []
        currentlyAddingWidget = true
        let test = JSON.parse(res.data.savedWidgets)
        test.forEach(savedWidget => {
            switch(savedWidget.id){
              case "calculatorWidget": widgets.push(new CalculatorWidget(savedWidget))
              document.querySelector('.sidebar-calculator-widget').classList.add('hide-sidebar-widget')
              break;
              case "clockWidget": widgets.push(new ClockWidget(savedWidget))
              document.querySelector('.sidebar-clock-widget').classList.add('hide-sidebar-widget')
              break;
              case "photoWidget": widgets.push(new PhotoWidget(savedWidget))
              document.querySelector('.sidebar-photo-widget').classList.add('hide-sidebar-widget')
              break;
              case "cryptoWidget": widgets.push(new CryptoWidget(savedWidget))
              document.querySelector('.sidebar-crypto-widget').classList.add('hide-sidebar-widget')
              break;
              case "weatherWidget": widgets.push(new WeatherWidget(savedWidget))
              document.querySelector('.sidebar-weather-widget').classList.add('hide-sidebar-widget')
              break;
            }
        })
        currentlyAddingWidget = false
    })
}