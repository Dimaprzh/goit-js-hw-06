const inputChange = document.querySelector('input#font-size-control');
const abracadabra = document.querySelector('span#text');

inputChange.addEventListener('change', text => {
    abracadabra.style.fontSize = `${text.target.value}px`
});