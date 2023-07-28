function testRoll() {
    const num = userInput.value
    const pick = Math.floor(Math.random()*num)+1;
    if (num === '') {
        outcome.innerHTML="Please enter a number.";
        return;
    }
    outcome.innerHTML=`Your number is ${pick}`
}
// console.log(testRoll())