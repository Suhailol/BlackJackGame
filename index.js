// Description: This is the main file for the blackjack game
let pairCards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")
let imgEl = document.getElementById("img-el")

let cardsValue = "";
let cards=['A','2','3','4','5','6','7','8','9','10','J','Q','K'];
let cardtype=['S','C','H','D'];
function getRandomCard() {
    let randomNumber = Math.floor( Math.random()*13 ) + 1
    let randomCard = Math.floor( Math.random()*4 ) + 1
    if (randomNumber > 10) {
        return [10, cards[randomNumber-1], cardtype[randomCard-1]]
    } else if (randomNumber === 1) {
        return [11, cards[randomNumber-1], cardtype[randomCard-1]]
    } else {
        return [randomNumber, cards[randomNumber-1], cardtype[randomCard-1]]
    }
}


function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    pairCards = [firstCard[0], secondCard[0]]
    cardsValue = [firstCard[1] + firstCard[2],secondCard[1] + secondCard[2]]
    sum = firstCard[0] + secondCard[0]
    var divNode = document.createElement("div");
    divNode.innerHTML = `<div><style>#terms {display: none;}</style></div>`;
    document.body.appendChild(divNode);
    renderGame()
}

function renderGame() {
    imgEl.innerHTML = ""
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < pairCards.length; i++) {
        cardsEl.textContent += pairCards[i] + " "
        imgEl.innerHTML+= `<img src="https://deckofcardsapi.com/static/img/${cardsValue[i]}.png" alt="card1">`
    }
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack! You Won!"
        hasBlackJack = true
    } else {
        message = "You're out of the game! :( Press Start Game to Restart"
        isAlive = false
    }
    messageEl.textContent = message
}


function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        let newCard = card[0]
        sum += newCard
        pairCards.push(newCard)
        cardsValue.push(card[1] + card[2])
        renderGame()        
    }
}
