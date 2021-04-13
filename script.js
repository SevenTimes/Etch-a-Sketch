const grid = document.getElementById('grid-container');
const defaultGridSize = 16;
let gridNum = defaultGridSize;

function createCell() {
  let cell = document.createElement('div');
  cell.setAttribute('class', 'cell');
  grid.appendChild(cell);
}

function drawGrid() {
  grid.style.gridTemplateColumns = `repeat(${gridNum}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${gridNum}, 1fr)`;

  let ver = 0;
  while (ver < gridNum) {
    let hor = 1;
    while (hor < gridNum) {
      createCell();
      hor++;
    }
    createCell();
    ver++;
  }
  let gridCells = Array.from(document.querySelectorAll('.cell'));
  gridCells.forEach((gridCell) => {
    gridCell.addEventListener('mouseover', () => {
      gridCell.style.backgroundColor = 'black';
    });
  });
}

function resetGrid() {
  while (grid.firstChild) {
    grid.removeChild(grid.lastChild);
  }
}

drawGrid();

function resetBoard() {
  let userGridSize = prompt('Enter new grid size (2 - 100)');
  if (userGridSize <= 1 || userGridSize > 100 || isNaN(userGridSize)) {
    gridNum = defaultGridSize;
  } else {
    gridNum = userGridSize;
  }
  resetGrid();
  drawGrid();
}
