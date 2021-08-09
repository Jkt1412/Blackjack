let player = {
	name : "Jeet",
	chips : 145
}

let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")

playerEl.innerText = player.name + ": $" + player.chips

function getRandomCard(){
	let random = Math.floor(Math.random()*13) + 1
	if (random === 1){
		return 11
	}
	else if (random > 10){
		return 10
	}
	else{
		return random
	}
}

function startGame() {
	isAlive = true
	cards = [getRandomCard() , getRandomCard()]
	sum = cards[0] + cards[1]
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: "
	for (let i=0; i < cards.length ; i++){
		cardsEl.textContent += cards[i] + " "
	}
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}


function newCard() {
	// only when player is alive and not having blackjack
	if (isAlive === true && hasBlackJack === false){
		let card = getRandomCard()
		sum += card
		cards.push(card)
		renderGame()
	}
}
