const pass = "bob";


//sync Callback
//callback is passing a function as a parameter

// //one function that calls all needed functions
// function eat(name, foodOne, foodTwo, foodThree) {
//     foodOne(name);
//     foodTwo(name);
//     foodThree(name);
// };

// function penis(name) {
//     console.log(name + " eats penis")
// };

// function toast(name) {
//     console.log(name + " eats toast")
// };

// function babies(name) {
//     console.log(name + " eats babies")
// };


// //declare function which executes everything for easier to read callback
// const thing = (execute, pass) => {

//     return execute(pass, toast, penis, babies);

// };

// thing(eat, pass);







// //Async Callback

// //declare functions. Each has a call to the function that is passed in
// function toast(name, callBack) {
//     console.log(name + " eats toast");
//     callBack();
// }

// function penis(name, callBack) {
//     console.log(name + " eats penis");
//     callBack();
// }

// function babies(name, callBack) {
//     console.log(name + " eats babies");
//     callBack();
// }

// // one function executes a chain of code
// // toast is called with name as its first parameter and a new function is
// // made for its second. This new function calls the next needed function
// // and it then repeates. This is for when certain steps need to occur before 
// // others. However it is messy
// const thingTwo = (name) => {
//     toast(name, function() {
//         penis(name, function (){
//             babies(name, function() {
//                 console.log("finished");
//             });
//         });
//     });
// }


// thingTwo(pass);




//promise

//declare functions
function toast(name) {
    console.log(name + " eats toast");
}

function penis(name) {
    console.log(name + " eats penis");
}

function babies(name) {
    console.log(name + " eats babies");
}

function fail(name) {
    console.log(name + " died");
}


//create a promise. a promise takes a function as a parameter
//the function has two needed parameters (resolve, reject) itself 
//arrow syntax then means the anonymous function is then used to execute 
//following code. Conditionals are made to either return 
//a resolve value or reject value.
const myPromise = new Promise((resolve, reject) => {

    if (pass == 'bob') {
        resolve("bob is present");
    }
    else {
        reject("not bob");
    }
});


//call promise and add .then(). then takes promises return as a paremeter 
//and creates the next funciton to be used. you can use the return value
//to send a message or however. You can then call .then() again while chaning
//and execute the next ordered function. However it seems you can only 
//use the resolve message once when chaining. 
//This is becuase you must reuturn another promise
//before .then() can attach
// .catch is used the same way just for errors or exceptions to promise conditions.
myPromise.then((message) => {
    console.log(message);
    toast(pass);
    return myPromise
}).then((message) => {
    console.log(message);
    penis(pass);
    return myPromise
}).then((message) => {
    console.log(message);
    babies(pass);
}).catch((message) => {
    console.log(message);
});

 