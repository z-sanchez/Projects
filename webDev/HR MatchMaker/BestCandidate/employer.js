var displayValue = document.getElementById('value');

var question = document.getElementById('question'); //header space for question
var answers = document.querySelectorAll('.choice'); //divs for answer choices

var questions = ["At least, how old should the candidate be?", "What is the preffered pay for the position?", "At least how many years of experience should your employee have?", "On a scale of 1-10, how comfortable in stressful situations should your employee be?", "On a scale of 1-10, how good should your employee's communication skills be?", "Should your employee have a college degree?"];
var questionNumber = 0;


const empOrCan = true;

//Employer preferences
var employer = {
    age: null,
    salary: null,
    exp: null,
    pressure: null,
    comm: null,
    college: false,
    weightArray: [1,1,1,1,1,1],
    infoEntered: false
};



function displayUpdate () {

    displayValue.innerHTML = employer.weightArray[questionNumber];
    slider[2].value = employer.weightArray[questionNumber];
    
}



function storeEmp () {

    employer.weightArray[questionNumber] = parseInt(slider[2].value);

    try {
    switch (questionNumber) {
        case 0:
            employer.age = parseInt(document.querySelector('input[name="age"]:checked').value);
            break;
        case 1:
            employer.salary = parseInt(document.querySelector('input[name="salary"]:checked').value);
            break;
        case 2:
            employer.exp = parseInt(document.getElementById('exp').value);
            break;
        case 3:
            employer.pressure = parseInt(slider[0].value);
            break;
        case 4:
            employer.comm = parseInt(slider[1].value);
            break;
        default:
            break;
    }
    }
    catch(err) {
        return;
    }
}


