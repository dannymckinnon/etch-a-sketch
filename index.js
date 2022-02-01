// create a function that takes in n and returns or appends to .container
  // a grid of n*n divs
const container = document.querySelector('.container');

function createGrid(n) {
  if (isNaN(n)) {
    n = 16;
    gridSize.value = '';
  } 
  
  if (n < 2) n = 3;
  if (n > 100) n = 100;

  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
  for (let i = 0; i < n; i++) {
    for (let i = 0; i < n; i++) {
      const div = document.createElement('div');
      const size = (1 / n) * 100;
      div.style.width = size + '%';
      div.style.height = size + '%';
      container.appendChild(div);
    }
  }
}

createGrid(16);

// setup event listeners on hover and change the background color of the div
  // by adding a new class or changing background-color using js
container.addEventListener('mouseover', function(e) {
  if (e.target.style.backgroundColor == '') {
    const colorSet = ['#febcc8', '#ffffd8', '#eaebff', '#e0fefe'];
    e.target.style.backgroundColor = colorSet[Math.floor(Math.random()*colorSet.length)];
  }
})

// add a button at the top that will clear the grid and prompt the user for
  // a new number
let gridSize = document.querySelector('.gridsize');
let populateGrid = document.querySelector('.populate');

populateGrid.addEventListener('click', () => {
  createGrid(parseInt(gridSize.value));
})



// reset grid
// const reset = document.querySelector('.reset');

// reset.addEventListener('click', function() {
//   const child = container.childNodes;
//   for (let i = 1; i < child.length; i++) {
//     child[i].style.backgroundColor = '';
//   }
// })

window.onload = function() {
  gridSize.value = '';
}


