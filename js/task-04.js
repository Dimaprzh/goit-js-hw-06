
let counterValue = 0;
const displayCounter = document.querySelector('#value');
const buttonPlus = document.querySelector('[data-action="increment"]');
const buttonMinus = document.querySelector('[data-action="decrement"]');

//console.log(counterValue)
//console.log(displayCounter)
//console.log(buttonPlus)
//console.log(buttonMinus)

buttonPlus.addEventListener('click', () => {
    counterValue++
    displayCounter.textContent = counterValue
});

buttonMinus.addEventListener('click', () => {
    counterValue--
    displayCounter.textContent = counterValue
});