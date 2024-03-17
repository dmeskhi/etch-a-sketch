function createBoard(size) {
  let board = document.querySelector(".board");
  let squares = document.querySelectorAll("div");
  squares.forEach((div) => div.remove());
  
  board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  for (let i = 0; i < 256; i++) {
    let square = document.createElement("div");
    square.style.backgroundColor = "blue";
    board.insertAdjacentElement("beforeend", square);
  }
}
createBoard(16);

function changeSize(input){
    createBoard(input);
}
