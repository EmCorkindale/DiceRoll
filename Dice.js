const outcome = document.querySelector("#outcome")
const button = document.querySelector("button")
const userInput = document.querySelector("#user-input")

function roll(){
    const num = userInput.value
    const pick = Math.floor(Math.random()*num)+1;
    if (num === '') {
        outcome.innerHTML="Please enter a number.";
        return;
    }
    outcome.innerHTML=`Your number is ${pick}`
}

button.addEventListener("click", roll)
