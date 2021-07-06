
const button = document.getElementById('butt');

const links = document.querySelector(".list");


button.addEventListener('click', add);


function add() {

    links.classList.toggle('add');

}