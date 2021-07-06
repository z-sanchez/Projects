const button = document.querySelector(".buttonBar");
const header = document.querySelector('h2');
const image = document.querySelector('img');
const desc = document.querySelector('p');
var index = 0;


const carousel  = [

    {
        name: "German Shepard",
        image: "gsd.jpg",
        desc: " Intelligent, Stubborn, Curious, Obedient, Alert, Loyal, Confident, Watchful, Courageous"
    },
    
    {
        name: "Pekingese",
        image: 'pekingese.jpg',
        desc: 'Intelligent, Affectionate, Stubborn, Opinionated, Good-natured, Aggressive'
    },
    
    {
        name: "Pug",
        image: 'pug.jpg',
        desc: 'Playful, Affectionate, Clever, Stubborn, Docile, Mischievous, Charming, Sociable, Loving, Attentive, Quiet, Calm'
    },

    {
        name: "Patoto Chip",
        image: "goofy.jpg",
        desc: "funny, silly, bad"
    }
];





button.addEventListener("click" , (event) => {

    var target = event.target;

    if (target.innerHTML == 'Back') {
        --index;
        if (index < 0) {
            index = 3;
        }
        header.innerHTML = carousel[index].name;
        image.src = carousel[index].image;
        desc.innerHTML = carousel[index].desc;
    }
    else if (target.innerHTML == 'Next') {
        ++index;
        if (index == 4) {
            index = 0;
        }
        header.innerHTML = carousel[index].name;
        image.src = carousel[index].image;
        desc.innerHTML = carousel[index].desc;
    }

});

