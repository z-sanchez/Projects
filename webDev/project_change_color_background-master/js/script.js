let button = document.querySelector('button');
let color = document.querySelector('body');
let array = ['pink', 'blue', 'lilac', 'red', 'magenta', 'silver'];

button.addEventListener('click', changeColor);

function changeColor() {
    let newColor = Math.floor(Math.random() * array.length);
    color.style.background = array[newColor];
}
