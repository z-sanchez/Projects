const item = document.querySelector('div');
const bob = document.querySelector('button');
var clone = item.cloneNode(true);
const body = document.body;
var array = [];
array[0] = item;
var count = 1;



bob.addEventListener("click", () => {

    clone = item.cloneNode(true);
    array[count] = clone;
    body.append(clone);
    ++count;
    cleanArray();

});



function cleanArray() {
    array.forEach(element => {
        element.addEventListener("click", () => {
            element.remove();
        });
    });
};