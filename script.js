//global variable
let color = "black";

//Create sketchBoard
function createBoard(size) {
  let board = document.querySelector(".board");
  //avoid problems when getting higher value than 16
  let squares = board.querySelectorAll("div");
  squares.forEach((div) => div.remove());
  board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  //determine any value
  let amount = size * size;
  //Create squares
  for (let i = 0; i < amount; i++) {
    let square = document.createElement("div");
    square.addEventListener("mouseover", colorDot);
    square.style.backgroundColor = "white";
    //New method for the developer. It inserts a given 
    //element node at a given position relative to 
    //the element it is invoked upon
    board.insertAdjacentElement("beforeend", square);
  }
}
createBoard(16);

function changeSize(input) {
  //validate input
  if (input >= 2 && input <= 100) {
    createBoard(input);
  } else {
    console.log("Error");
  }
}

function colorDot() {
  this.style.backgroundColor = color;
}

function changeColor(choice) {
  color = choice;
}

function resetBoard() {
  let board = document.querySelector(".board");
  let squares = board.querySelectorAll("div");
  squares.forEach((div) => (div.style.backgroundColor = "white"));
}
