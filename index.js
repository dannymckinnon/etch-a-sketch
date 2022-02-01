// create a function that takes in n and returns or appends to .container
  // a grid of n*n divs

const container = document.querySelector('.container');

function createGrid(n) {
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


// add a button at the top that will clear the grid and prompt the user for
  // a new number


// generate a new grid in the same total space as before with a limit of 100

