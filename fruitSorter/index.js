let fruit = ["🍎", "🍊", "🍎", "🍎", "🍊"]
let appleShelf = document.getElementById("apple-shelf")
let orangeShelf = document.getElementById("orange-shelf")
let originalShelf = document.getElementById("original-shelf")

for(let i = 0; i < fruit.length; i++){
    originalShelf.textContent += fruit[i]
}

function sortFruits(){
    for(let i = 0; i < fruit.length; i++){
        if(fruit[i] === "🍎"){
            appleShelf.textContent += "🍎"
        }else{
            orangeShelf.textContent += "🍊"
        }
    }
}
