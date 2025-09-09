let myLeads = []

const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

// Get the leads from the localStorage - PS: JSON.parse()
// Store it in a variable, leadsFromLocalStorage
// Log out the variable
let leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") )
console.log(leadsFromLocalStorage)

inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    console.log(localStorage.getItem("myLeads"))

    render()
})

function render(){
    let listItems = ""
    for(let i = 0; i < myLeads.length; i++){
        listItems += `
        <li>
            <a href="${myLeads[i]}" target='_blank'>
            ${myLeads[i]}
            </a>
        </li>
        `
    }
    ulEl.innerHTML = listItems
}

