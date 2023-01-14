let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")
let imgEl = document.getElementById("card-img")


function getRandomCard() {
    let randomNumber = Math.floor( Math.random()*13 ) + 1
    changeImage(randomNumber)
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
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
        sum += card
        cards.push(card)
        renderGame()        
    }
}

function changeImage(cardNumber){
    let imgUrl = "images/backofcard.png"
    switch(cardNumber) {
        case 1:
            imgUrl = "https://deckofcardsapi.com/static/img/AH.png"
            break;
        case 2:
            imgUrl = "https://deckofcardsapi.com/static/img/2C.png"
            break;
        case 3:
            imgUrl = "https://deckofcardsapi.com/static/img/3S.png"
            break;
        case 4:
            imgUrl = "https://deckofcardsapi.com/static/img/4D.png"
            break;
        case 5:
            imgUrl = "https://deckofcardsapi.com/static/img/5H.png"
            break;
        case 6:
            imgUrl = "https://deckofcardsapi.com/static/img/6C.png"
            break;
        case 7:
            imgUrl = "https://deckofcardsapi.com/static/img/7S.png"
            break;
        case 8:
            imgUrl = "https://deckofcardsapi.com/static/img/8D.png"
            break;
        case 9:
            imgUrl = "https://deckofcardsapi.com/static/img/9H.png"
            break;
        case 10:
            imgUrl = "https://deckofcardsapi.com/static/img/0D.png"
            break;
        case 11:
            imgUrl = "https://deckofcardsapi.com/static/img/JC.png"
            break;
        case 12:
            imgUrl = "https://deckofcardsapi.com/static/img/QS.png"
            break;
        case 13:
            imgUrl = "https://deckofcardsapi.com/static/img/KH.png"
            break;
        default:
            break;
      }
      imgEl.src = imgUrl;
}