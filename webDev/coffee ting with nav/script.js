const butt = document.getElementById('butt');
const toggler = document.querySelectorAll('.list li');
var toggleCheck = false;
const animation = document.getElementById('goofy');
var x = window.matchMedia("(min-width: 1201px)");



window.addEventListener('resize', change, false);
butt.addEventListener('click', toggle);



function change() {

    if (x.matches) {
        toggler.forEach((item) => {
            item.style.display = 'list-item';
        });
        toggleCheck = false;
    }
    else if (toggleCheck == false){
        toggler.forEach((item) => {
            item.style.display = 'none';
        });
    }

}


function toggle() {

    if (toggleCheck == false) {
        toggler.forEach((item) => {
            item.style.display = 'list-item';
        });
        toggleCheck = true;
    }
    else {
        toggler.forEach((item) => {
            item.style.display = 'none';
        });
        toggleCheck = false;
    }
}

