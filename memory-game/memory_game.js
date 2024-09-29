const gameCards = document.getElementsByClassName("game-cards");
const gameBoard = document.getElementById("game-board");

let cardsPosition = [];

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

//make the cards flip only when clickng on them
// document.getElementsByClassName("game-cards").addEventListener("click", function);

//check if the cards are the same
function findCouple(card1, card2) {

}
