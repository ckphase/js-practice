let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = " "
let messageEl = document.getElementById("message-el")
// let sumEl = document.getElementById("sum-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector("#cards-el")

let player = {
    name: "Jim",
    chips: 145
}

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

// random number generation 
function getRandomCard(){
    let randomNumber = Math.floor(Math.random()*13)+1
    // if 1     -> return 11
    // if 11-13 -> return 10
    if (randomNumber === 1){
        return 11
    } else if(randomNumber  > 10){
        return 10
    } else {
        return randomNumber
    }
}

function startGame(){
    isAlive = true
    let firstCard = getRandomCard()
    let SecondCard = getRandomCard()
    cards = [firstCard, SecondCard]
    sum = firstCard + SecondCard
    rendergame()
}

function rendergame(){
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card? "
    } else if (sum === 21) {
        hasBlackJack = true
        message = "Wohoo! You've got Blackjack! "
    } else {
        isAlive = false
        message = "You're out of the game! "
    }

    console.log(message)
    messageEl.textContent = message
}

function newCard(){
    if(isAlive === true && hasBlackJack === false){
    console.log("Drawing new card form the deck!")
    let card = getRandomCard()
    sum += card
    cards.push(card)
    console.log(cards)
    rendergame()
    }
}

// // 3. Log it out to check that you're doing it right
// if (isAlive){
//     console.log("You are still in the game")
// }else{
//     console.log("You are out of the game")
// }
// // Check if the person is old enough to enter the nightclub (21)
// // Log a suitable message to the console in both cases

// let age = 22

// // if less than 21 -> "You can not enter the club!"
// if (age > 21){
//     console.log("Welcome")
// }else {
//     console.log("You can not enter the club!")
// }

// console.log(4 === 3)  //false 
// console.log(5 > 2)    // true
// console.log(12 > 12)  //false
// console.log(3 < 0)    //false
// console.log(3 >= 3)   //true
// console.log(11 <= 11) //true
// console.log(3 <= 2)   //false