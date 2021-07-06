const value = document.querySelectorAll(".value");
var slider = document.querySelectorAll(".slider");
var array = [];


//converts node list to array so you can find index later on (might be a better way-
//to locate element in nodelist)
for (var i = 0; i < slider.length; ++i) {
    array[i] = slider[i];
}


//updates slider value
array.forEach(current => {
    
    current.addEventListener('change', function (){

        value[array.indexOf(current)].innerHTML = current.value;
        
    })
});





