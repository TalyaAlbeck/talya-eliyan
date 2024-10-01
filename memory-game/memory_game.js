const htmlGameCards = document.getElementsByClassName("game-cards"); //the original cards order
const gameBoard = document.getElementById("game-board"); //main

let gameCards = Array.from(htmlGameCards)


for (let i = 0; i < gameCards.length; i++) {
    gameCards[i].addEventListener("click", (event) => onCardclick(event))
}


// shufle the cards
let cardsPosition = []; //the array that replace the original array

function relocation() {
    let j = 0;
    while (cardsPosition.length != gameCards.length) {
        let i = Math.floor(Math.random() * gameCards.length);
        if (!cardsPosition.includes(gameCards[i])) {
            cardsPosition.push(gameCards[i])
        }
        j++
    }

    cardsPosition.forEach(element => {
        element.remove()
    })
    cardsPosition.forEach((element) => {
        gameBoard.appendChild(element)
    })

    cardsPosition = []
}

//flip the card and check there's only 2 flips cards

let cardsChosen = [];

function onCardclick({ target }) {
    const flipCardInner = target.parentElement.parentElement
    if (flipCardInner.className.includes("chosen")) return
    flipCardInner.classList.add("chosen");
    checkOnly2Cards();
    // console.log(flipCardInner.classList);

}

//check the 2 cards
function checkOnly2Cards() {
    cardsChosen = document.getElementsByClassName("chosen")
    if (cardsChosen.length < 2) {


    } else {
        setTimeout(() => {
            cardsChosen[0].classList.remove("chosen")
            cardsChosen[0].classList.remove("chosen")
        }, 2000);
        checkPair(cardsChosen)
    }
}

//check if the cards are the same
function checkPair(innerCards) {
    let card1Class = innerCards[0].children[1].className
    let card2Class = innerCards[1].children[1].className
    if (card1Class === card2Class) {
        console.log("Pair!")
        score += 10
        scoreElement.innerHTML = "Score: " + score
        innerCards[0].parentElement.classList.add("hidden")
        innerCards[1].parentElement.classList.add("hidden")
        if (document.getElementsByClassName("hidden").length === 16) {
            setTimeout(() => {
                alert("Game over!")
            }, 2000);
        }
    }
}

//restart the game when clicking on start over
function startOver() {
    for (let i = 0; i < gameCards.length; i++) {
        gameCards[i].classList.remove("hidden")
    }
    setTimeout(relocation, 2000);
    score = 0;
    scoreElement.innerHTML = "Score: " + score
}


let score = 0;
let scoreElement = document.getElementById("score")

