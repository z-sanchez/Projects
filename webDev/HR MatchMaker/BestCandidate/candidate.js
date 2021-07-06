var canQuestion = document.getElementById('canQuestion'); //header space for question
var canAnswers = document.querySelectorAll('.canChoice'); //divs for answer choices

var canQuestions = ["What is your name?", "How old are you?", "What salary are you expecting?", "How many years of experience do you have in this field", "On a scale of 1-10, how well do you do under pressure?", "On a scale of 1-10 rate your communication skills", "Do you have college degree?"];

var canQuestionNumber = 0;

const empOrCan = false;

var canCount = 0;
var canArray = new Array();


if (localStorage.getItem("canCount") == null) {
    localStorage.setItem("canCount", JSON.stringify(canCount));
    localStorage.setItem("canArray", JSON.stringify(canArray));
}


//Candidate preferences
var candidate = {

    name: null,
    age: null,
    salary: null,
    exp: null,
    pressure: null,
    comm: null,
    college: false,
    score: 0

};




function storeCan () {

    try {
    switch (canQuestionNumber) {
        case 0:
            candidate.name = document.querySelector('input[name="name"]').value;
            break;
        case 1:
            candidate.age = parseInt(document.querySelector('input[name="age"]').value);
            break;
        case 2:
            candidate.salary = parseInt(document.querySelector('input[name="salary"]:checked').value);
            break;
        case 3:
            candidate.exp = parseInt(document.getElementById('exp').value);
            break;
        case 4:
            candidate.pressure = parseInt(slider[0].value);
            break;
        case 5:
            candidate.comm = parseInt(slider[1].value);
            break;
        default:
            break;
    }
    }
    catch(err) {
        return;
    }

}

