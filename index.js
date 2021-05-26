const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
  ];
// REFS
const startBtnRef = document.querySelector('[data-action="start"]');
const stopBtnRef = document.querySelector('[data-action="stop"]');
const bodyRef = document.querySelector('body');

// formula
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
// DEFAULT
let intervalId = null;
let index;
// COUNTER
const counter = {
  isActive: false,
  start() {
    if (this.isActive) {
      return;
    }
    this.isActive = true;
    
    const currentColorIndex = () => {
    index = randomIntegerFromInterval(0, colors.length - 1);
    bodyRef.style.backgroundColor = colors[index];         
    };
        
    intervalId = setInterval(currentColorIndex, 850);
  },
        
  stop() {
    this.isActive = false;
    clearInterval(intervalId);
  },
};

// LISTENERS
startBtnRef.addEventListener('click', counter.start.bind(counter));
stopBtnRef.addEventListener('click', counter.stop.bind(counter));