var rows = 10;
var cols = 10;
var squareSize = 50;

var gameBoardContainer = document.getElementById("gameboard");

for (c = 0; c < cols; c++)

{
    for (r = 0; r < rows; r++)

    {

        var square = document.createElement("div");
        gameBoardContainer.appendChild(square);

        square.id = 's' + r + c;

        var topPosition = r * squareSize;
        var leftPosition = c * squareSize;

        square.style.top = topPosition + 'px';
        square.style.left = leftPosition + 'px';
    }
    console.log(gameBoardContainer);
}
var hitCount = 0;

var gameBoard = [
    [0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 1, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 1, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 1, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 1, 1, 1]
]

gameBoardContainer.addEventListener("click", shoot);

console.log(gameBoard);

function shoot(event) {
    if (event.target !== event.currentTarget) {

        var row = event.target.id.substring(1, 2);

        var col = event.target.id.substring(2, 3);

        console.log(event.target);

        if (gameBoard[row][col] == 0) {
            event.target.style.background = 'blue';

            gameBoard[row][col] = 3;

        } else if (gameBoard[row][col] == 1) {
            event.target.style.background = 'red';

            gameBoard[row][col] = 2;
            hitCount++;

            if (hitCount == 17) {
                alert(" You have sunk all ships!");
            }
        }
    }

    e.stopPropagation();
}

        