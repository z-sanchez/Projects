
const button = document.getElementById('goofy');

const exit = document.getElementById('butt');

const links = document.querySelector(".navBar");


button.addEventListener('click', add);

exit.addEventListener('click', add);

function add() {

    links.classList.toggle('add');

}