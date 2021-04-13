const grid = document.getElementById('grid-container');
let gridNum = 16;

function createCell() {
  let cell = document.createElement('div');
  grid.appendChild(cell);
}

function drawGrid() {
  grid.style.gridTemplateColumns = `repeat(${gridNum}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${gridNum}, 1fr)`;
  let ver = 0;

  while (ver < gridNum) {
    let hor = 0;
    while (hor < gridNum) {
      createCell();
      hor++;
    }
    createCell();
    ver++;
  }
}

drawGrid();
