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
    console.log('target: ', target);
    const imgGrandparent = target.parentElement.parentElement
    imgGrandparent.classList.add("chosen");
    // cardsChosen.push(document.getElementsByClassName("chosen"))
    // console.log(cardsChosen.length)
    checkOnly2Cards();
}

//check the 2 cards
function checkOnly2Cards() {
    cardsChosen = document.getElementsByClassName("chosen")
    if (cardsChosen.length < 2) {
        console.log('cardsChosen: ', cardsChosen);
        console.log("hello");

    } else {
        for (let i = 0; i < cardsChosen.length; i++) {
            // setTimeout(2000, () => {
            //     cardsChosen[i].classList.remove("chosen")
            // })
            cardsChosen = []
        }
    }
    // imgGrandparent.classList.remove("chosen");
}



//check if the cards are the same
function findPair() {

}
