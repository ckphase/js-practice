let count = 0
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let resetEl = document.getElementById("reset-el")
function increment() {
    count += 1
    countEl.textContent = count
}
function save(){ 
    saveEl.textContent += count + " - "  
    console.log(count)
}
function reset() {
    count = 0
    countEl.textContent = count
    saveEl.textContent = "Previous Enteries: "
}
let welcomeEl = document.getElementById("welcome-el")
let name = "Jim"
let greeting = "Welcome back, "
welcomeEl.innerText = greeting + name
welcomeEl.innerText +=  "!"
// // practice
// let userName = "Per"
// let message = "You have 3 new notifications"
// console.log(message+  ", " + userName + "!")
// let messageToUser = message + ", " + userName + "!"

// // exercise 2
// let greeting = "Hi, my name is "
// let name = "Jimin"
// console.log(greeting + ", " + name)

