function startBoard() {
    let drawBoard = document.getElementById("board").children;
    for(let i = 0; i < drawBoard.length; i++) {
        drawBoard[i].setAttribute("class", "square");
    }
}
let game = new Array();

function displayXorO() {
    let cells = document.querySelectorAll("#board > div");
    for (let i = 0; i < cells.length; i++) {
        cells[i].onclick = function() {
            if(game.length === 0) {
                cells[i].classList.add("square", "X");
                cells[i].innerHTML = "X";
                game.push("X");
            }
            else {
                if (game[game.length - 1] === "X"){
                    cells[i].classList.add("square", "O");
                    cells[i].innerHTML = "O";
                    game.push("O");
                }
                else if (game[game.length - 1] === "O"){
                    cells[i].classList.add("square", "X");
                    cells[i].innerHTML = "X";
                    game.push("X");
                }
            }
        }
    }
}

function start() {
    startBoard();
    displayXorO();
}

window.onload = start;