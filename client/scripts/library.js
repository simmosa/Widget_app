let widgetIDCount = 0;

function createWidget(options = {}){
    widgetIDCount++;
    options.content = `<div data-widgetID="${widgetIDCount}"></div>`

    console.log(options)
    grid.addWidget(options)

    return widgetIDCount;
}