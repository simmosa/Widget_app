let grid = GridStack.init({
  acceptWidgets: true,
  itemClass: 'grid-stack-item',
  dragIn: '.newWidget',
    dragInOptions : {
      revert:'invalid',
      handle:'.grid-stack-item',
      appendTo:'body',
      helper: 'clone'
    },
    cellHeight: '150px',
    disableResize: true,
    float: true
});

let currentlyAddingWidget = false;


let savedWidgets = [
  // {
  //   "x": 3,
  //   "y": 0,
  //   "h": 1,
  //   "id": "calculatorWidget",
  //   "w": 1
  // },
  // {
  //   "x": 3,
  //   "y": 0,
  //   "h": 1,
  //   "id": "calculatorWidget",
  //   "w": 1
  // },
  // {
  //   "x": 3,
  //   "y": 0,
  //   "h": 1,
  //   "id": "clockWidget",
  //   "w": 3
  // }
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

grid.on('added', (e, items) => {
  if(!currentlyAddingWidget){
      currentlyAddingWidget = true;
      console.log(items[0])
      grid.removeWidget(items[0].el)
      switch(items[0].id){
        case "calculatorWidget": widgets.push(new CalculatorWidget(items[0]))
        break;
        case "clockWidget": widgets.push(new ClockWidget(items[0]))
        break;
        case "photoWidget": widgets.push(new PhotoWidget(savedWidget))
        break;
    }
    currentlyAddingWidget = false;
  }
})

grid.on('dragstart', (e, item) => {
  console.log('drag started')
  sideBar.classList.add('nav-show-edit')
  showTrashCan();
})

grid.on('dragstop', (e, item) => {
  console.log('drag stopped')
  console.log(item)
  sideBar.classList.remove('nav-show-edit')
  if (mouseOverTrashCan){
    grid.removeWidget(item)
  }
  hideTrashCan();
  mouseOverTrashCan = false
})

