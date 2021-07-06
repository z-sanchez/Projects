var output = document.getElementById("output");
var blackSpace = document.getElementsByClassName("box");
var input = document.getElementById("input");


input.addEventListener("input",change);


function change () {

    if (input.value == "red") {

        blackSpace[0].style.backgroundColor = 'silver';
    
    }
    else {
        blackSpace[0].style.backgroundColor = input.value;
    }

}