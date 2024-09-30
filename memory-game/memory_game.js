const gameCards = document.getElementsByClassName("game-cards"); //the original cards order
const gameBoard = document.getElementById("game-board"); //main

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
    flipCardInner.classList.add("chosen");
    checkOnly2Cards();
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
    // imgGrandparent.classList.remove("chosen");
}

let k = gameCards.indexOf("bear")
console.log(k);

//check if the cards are the same
function checkPair(innerCards) {
    let card1Class = innerCards[0].children[1].className
    let card2Class = innerCards[1].children[1].className
    if (card1Class === card2Class) {
        console.log("Pair!")
        // delete gameCards[]
        console.log(gameCards)
    }
}
