const value = document.getElementById("value");
const decrease = document.getElementById("decrease");
const reset = document.getElementById("reset");
const increase = document.getElementById("increase");
var count = 0;

decrease.addEventListener("click", decValue);
increase.addEventListener("click", incValue);
reset.addEventListener("click", resetVal);


function decValue () {

    --count;

    if (count < 0) {
        value.style.color = "#c33124";
    }

    if (count == 0) {
        value.style.color = "white";
    }

    value.innerHTML = count;

}

function incValue () {

    ++count;

    if (count > 0) {
        value.style.color = "#59c324";
    }

    if (count == 0) {
        value.style.color = "white";
    }

    value.innerHTML = count;

}


function resetVal () {

    count = 0;

    value.style.color = "white";

    value.innerHTML = count;

}