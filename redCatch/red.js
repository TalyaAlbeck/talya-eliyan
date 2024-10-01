let score = 0;
let timeoutId = 0;

const squares = document.getElementsByClassName("square");

document.getElementById("start").addEventListener("click", pressedSquare);

for (let i = 0; i < squares.length; i++) {
    squares[i].addEventListener("click", (event) => handleSquareClick(event))
}

let scoreElement = document.getElementById("score")

function pressedSquare() {
    let chooseSquare = (Math.floor(Math.random() * squares.length))
    console.log('chooseSquare: ', chooseSquare);
    let chosen = squares[chooseSquare];
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = "blue"
    }
    chosen.style.backgroundColor = "red";
    timeoutId = setTimeout(pressedSquare, 2000);
    console.log('timeoutId: ', timeoutId);
}

function handleSquareClick(event) {
    if (event.target.style.backgroundColor === "red") {
        score += 5
        scoreElement.innerHTML = "Score: " + score
        clearTimeout(timeoutId)
        pressedSquare()

    } else {
        score -= 5
        scoreElement.innerHTML = "Score: " + score
    }
}