function startBoard() {
    let drawBoard = document.getElementById("board").children;
    for(let i = 0; i < drawBoard.length; i++) {
        drawBoard[i].setAttribute("class", "square");
    }
}
window.onload = startBoard;


