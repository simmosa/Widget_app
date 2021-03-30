let grid = GridStack.init();

let savedWidgets = [
    {
        "x": 3,
        "y": 0,
        "h": 2,
        "id": "calculatorWidget",
        "w": 3
      },
    {
      "x": 3,
      "y": 0,
      "h": 2,
      "id": "calculatorWidget",
      "w": 3
    },
    {
      "x": 3,
      "y": 0,
      "h": 1,
      "id": "clockWidget",
      "w": 4
    }
];


let widgets = []


savedWidgets.forEach(savedWidget => {
    switch(savedWidget.id){
        case "calculatorWidget": widgets.push(new CalculatorWidget(savedWidget))
        break;
        case "clockWidget": widgets.push(new ClockWidget(savedWidget))
        break;
    }
});


