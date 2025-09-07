let fighters = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁"]

let stageEl = document.getElementById("stage")
let fightButton = document.getElementById("fightButton")

fightButton.addEventListener("click", function() {
    console.log(randomNumber())  
    let emojiOne = randomNumber()
    let emojiTwo = randomNumber()  
    stageEl.textContent = emojiOne + " vs " + emojiTwo
})

function randomNumber(){
    let num = Math.floor(Math.random() * fighters.length)
    return fighters[num]
}