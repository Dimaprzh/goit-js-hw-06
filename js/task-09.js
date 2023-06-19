function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const textColor = document.querySelector('.color');
const body = document.querySelector('body');
const colorButton = document.querySelector('.change-color');
//console.log(body)

colorButton.addEventListener('click', () => {
  let color = getRandomHexColor();
  body.style.backgroundColor = color;
  textColor.textContent = color;
});

