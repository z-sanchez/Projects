let button = document.querySelector('button');
let back = document.querySelector("body");
let colors = ["grey", "black", "red", "magenta", "blue"];


button.addEventListener("click",change);


function change() {

    let changeColor = colors[Math.floor(Math.random() * colors.length)];
  
    back.style.background = changeColor;
}

