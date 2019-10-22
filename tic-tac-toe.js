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
            if(game.length === 0 && cells[i].innerHTML === "") {
                cells[i].classList.add("square", "X");
                cells[i].innerHTML = "X";
                game.push("X");
                checkWinner();
                reset();
            }
            else {
                if (game[game.length - 1] === "X" && cells[i].innerHTML === ""){
                    cells[i].classList.add("square", "O");
                    cells[i].innerHTML = "O";
                    game.push("O");
                    checkWinner();
                    reset();
                }
                else if (game[game.length - 1] === "O" && cells[i].innerHTML === ""){
                    cells[i].classList.add("square", "X");
                    cells[i].innerHTML = "X";
                    game.push("X");
                    checkWinner();
                    reset();
                }
            }
        }
    }
}

function mouseSquare() {
    let squares = document.getElementById("board").children;
    for (let i = 0; i < squares.length; i++) {
        squares[i].onmouseover = function() {
            squares[i].classList.toggle("hover", true)
        }
        squares[i].onmouseout = function() {
            squares[i].classList.toggle("hover", false)
        }
    }
    
}

function checkWinner() {
    let chcells = document.getElementById("board").children;
    if (chcells[0].textContent !== "" && chcells[0].textContent === "X" && chcells[1].textContent === "X" && chcells[2].textContent === "X") {  
        document.getElementById("status").classList.add("you-won");
        document.getElementById("status").innerHTML = "Congratulations! X is the Winner!";
    }
    else if (chcells[3].textContent !== "" && chcells[3].textContent === "X" && chcells[4].textContent === "X" && chcells[5].textContent === "X") {
        update.classList.add("status.you-won::before", "status", "you-won", "#status.you-won::after");
        update.innerHTML = "Congratulations! X is the Winner!";
    }
    else if (chcells[6].textContent !== "" && chcells[6].textContent === "X" && chcells[7].textContent === "X" && chcells[8].textContent === "X") {
        document.getElementById("status").classList.add("you-won");
        document.getElementById("status").innerHTML = "Congratulations! X is the Winner!";
    }
    else if (chcells[2].textContent !== "" && chcells[2].textContent === "X" && chcells[4].textContent === "X" && chcells[6].textContent === "X") {
        document.getElementById("status").classList.add("you-won");
        document.getElementById("status").innerHTML = "Congratulations! X is the Winner!";
    }
    else if (chcells[0].textContent !== "" && chcells[0].textContent === "X" && chcells[4].textContent === "X" && chcells[8].textContent === "X") {
        document.getElementById("status").classList.add("you-won");
        document.getElementById("status").innerHTML = "Congratulations! X is the Winner!";
    }
    else if (chcells[0].textContent !== "" && chcells[0].textContent === "X" && chcells[3].textContent === "X" && chcells[6].textContent === "X") {
        document.getElementById("status").classList.add("you-won");
        document.getElementById("status").innerHTML = "Congratulations! X is the Winner!";
    }
    else if (chcells[1].textContent !== "" && chcells[1].textContent === "X" && chcells[4].textContent === "X" && chcells[7].textContent === "X") {
        document.getElementById("status").classList.add("you-won");
        document.getElementById("status").innerHTML = "Congratulations! X is the Winner!";
    }
    else if (chcells[2].textContent !== "" && chcells[2].textContent === "X" && chcells[5].textContent === "X" && chcells[8].textContent === "X") {
        document.getElementById("status").classList.add("you-won");
        document.getElementById("status").innerHTML = "Congratulations! X is the Winner!";
    }
    else if (chcells[0].textContent !== "" && chcells[0].textContent === "O" && chcells[1].textContent === "O" && chcells[2].textContent === "O") {
        document.getElementById("status").classList.add("you-won");
        document.getElementById("status").innerHTML = "Congratulations! O is the Winner!";
    }
    else if (chcells[3].textContent !== "" && chcells[3].textContent === "O" && chcells[4].textContent === "O" && chcells[5].textContent === "O") {
        document.getElementById("status").classList.add("you-won");
        document.getElementById("status").innerHTML = "Congratulations! O is the Winner!";
    }
    else if (chcells[6].textContent !== "" && chcells[6].textContent === "O" && chcells[7].textContent === "O" && chcells[8].textContent === "O") {
        document.getElementById("status").classList.add("you-won");
        document.getElementById("status").innerHTML = "Congratulations! O is the Winner!";
    }
    else if (chcells[2].textContent !== "" && chcells[2].textContent === "O" && chcells[4].textContent === "O" && chcells[6].textContent === "O") {
        document.getElementById("status").classList.add("you-won");
        document.getElementById("status").innerHTML = "Congratulations! O is the Winner!";
    }
    else if (chcells[0].textContent !== "" && chcells[0].textContent === "O" && chcells[4].textContent === "O" && chcells[8].textContent === "O") {
        document.getElementById("status").classList.add("you-won");
        document.getElementById("status").innerHTML = "Congratulations! O is the Winner!";
    }
    else if (chcells[0].textContent !== "" && chcells[0].textContent === "O" && chcells[3].textContent === "O" && chcells[6].textContent === "O") {
        document.getElementById("status").classList.add("you-won");
        document.getElementById("status").innerHTML = "Congratulations! O is the Winner!";
    }
    else if (chcells[1].textContent !== "" && chcells[1].textContent === "O" && chcells[4].textContent === "O" && chcells[7].textContent === "O") {
        document.getElementById("status").classList.add("you-won");
        document.getElementById("status").innerHTML = "Congratulations! O is the Winner!";
    }
    else if (chcells[2] !== "" && chcells[2].textContent === "O" && chcells[5].textContent === "O" && chcells[8].textContent === "O") {
        document.getElementById("status").classList.add("you-won");
        document.getElementById("status").innerHTML = "Congratulations! O is the Winner!";
    }
}

function reset() {
    let bCells = document.querySelectorAll("#board div");
    document.getElementsByClassName("btn")[0].addEventListener("click", function() {
        game.length = 0;
        for (let j= 0; j < bCells.length; j++) {
            bCells[j].innerHTML = "";
        }

        document.getElementById("status").innerHTML = "Move your mouse over a square and click to play an X or an O.";
        document.getElementById("status").classList.remove("you-won");
    });
}



function start() {
    startBoard();
    displayXorO();
    mouseSquare();
}

window.onload = start;