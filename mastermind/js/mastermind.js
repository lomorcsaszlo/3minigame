document.addEventListener("DOMContentLoaded", function () {
    for (let i = 0; i < 44; i++) {
      let cell = document.createElement("div");
      cell.className = "boardCell";
      cell.id = "board" + i;
      document.querySelector(".board").appendChild(cell);
    }
  
    for (let i = 0; i < 44; i++) {
      let cell = document.createElement("div");
      cell.className = "pegCell";
      cell.id = "peg" + i;
      document.querySelector(".pegs").appendChild(cell);
    }
    let board = document.querySelector(".board");
    board.style.display = "grid";
    board.style.gridTemplateRows = "repeat(11, 53.50px)";
    board.style.gridTemplateColumns = "repeat(4, 53.50px)";
  
    let pegs = document.querySelector(".pegs");
    pegs.style.display = "grid";
    pegs.style.gridTemplateRows = "repeat(11, 23.75px)";
    pegs.style.gridTemplateColumns = "repeat(4, 23.75px)";
  
    let boardCells = document.querySelectorAll(".boardCell");
    boardCells.forEach(cell => {
      cell.style.border = "1px solid black";
      cell.style.borderRadius = "50%";
      cell.style.backgroundColor = "white";
    });
  
    let pegCells = document.querySelectorAll(".pegCell");
    pegCells.forEach(cell => {
      cell.style.border = "1px solid black";
      cell.style.borderRadius = "50%";
      cell.style.backgroundColor = "gray";
    });
});  