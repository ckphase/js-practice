let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

console.log(localStorage.getItem("myLeads"))

inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value)
    inputEl.value = ""
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

