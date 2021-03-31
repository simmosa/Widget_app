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
              break;
              case "clockWidget": widgets.push(new ClockWidget(savedWidget))
              break;
              case "photoWidget": widgets.push(new PhotoWidget(savedWidget))
              break;
            }
        })
        currentlyAddingWidget = false
    })
}