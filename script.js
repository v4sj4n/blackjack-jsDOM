const player = {
  name: 'Vasjan',
  chips: 415,
}

let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ''
let messageEl = document.getElementById('message-el')
let sumEl = document.getElementById('sum-el')
let cardsEl = document.getElementById('cards-el')
let elParagraph = document.getElementById('player-el')

elParagraph.textContent = player.name + ': $' + player.chips

function getRandomCard() {
  let selectedCard = Math.floor(Math.random() * 13) + 1
  if (selectedCard === 1) {
    return 11
  } else if (selectedCard > 10) {
    return 10
  } else {
    return selectedCard
  }
}

function startGame() {
  isAlive = true
  let firstCard = getRandomCard()
  cards.push(firstCard)
  let secondCard = getRandomCard()
  cards.push(secondCard)
  sum = firstCard + secondCard

  renderGame()
}

function renderGame() {
  cardsEl.textContent = 'Cards: '

  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + ' '
  }

  sumEl.textContent = 'Sum: ' + sum

  if (sum <= 20) {
    message = 'Do you want to draw a new card?'
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
  if (isAlive === true && sum < 21) {
    let card = getRandomCard()
    sum += card
    cards.push(card)
    console.log(cards)
    renderGame()
  }
}
