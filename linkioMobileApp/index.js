import { initializeApp } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-analytics.js";
import { getDatabase, ref, push, onValue, remove} from "https://www.gstatic.com/firebasejs/12.2.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyDkiWTDOprR7UZuF9cHfWopmTtRS_QGaCI",
  authDomain: "urlio-96489.firebaseapp.com",
  databaseURL: "https://urlio-96489-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "urlio-96489",
  storageBucket: "urlio-96489.firebasestorage.app",
  messagingSenderId: "832322716860",
  appId: "1:832322716860:web:e630f2721385ca0aa2bcb9",
  measurementId: "G-MVT2D24MX6"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);

const referenceInDB = ref(database, "leads");

const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
const deleteBtn = document.getElementById("delete-btn");

onValue(referenceInDB, function(snapshot){
    const snapshotDoesExist = snapshot.exists()
    if (snapshotDoesExist) {
    const snapshotValues = snapshot.val()
    const leads = Object.values(snapshotValues)
    console.log(leads)
    render(leads)
    }
})

inputBtn.addEventListener("click", function () {
  push(referenceInDB, inputEl.value);  
  inputEl.value = "";
});

deleteBtn.addEventListener("dblclick", function () {
    remove(referenceInDB)
    ulEl.innerHTML = ""
});

function render(leads) {
  let listItems = "";
  for (let i = 0; i < leads.length; i++) {
    listItems += `
      <li>
        <a href="${leads[i]}" target="_blank">
          ${leads[i]}
        </a>
      </li>
    `;
  }
  ulEl.innerHTML = listItems;
}
