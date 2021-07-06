const prev = document.getElementById('prev');
const next = document.getElementById('next');
const submit = document.getElementById('submit');
var flex = document.getElementsByClassName('buttonFlex'); //flexbox for buttons

const yes = document.getElementById('yes');
const no = document.getElementById('no');


submit.addEventListener("click", function() {


    if (empOrCan == true) {
        storeEmp();
        employer.infoEntered = true;
        localStorage.setItem("employer", JSON.stringify(employer));
    }
    else {
        storeCan();

        canArray = localStorage.getItem("canArray");
        canArray = JSON.parse(canArray);

        count = localStorage.getItem("canCount");
        count = JSON.parse(count);

        canArray[count] = candidate;
        ++count;

        localStorage.setItem("canArray", JSON.stringify(canArray));
        localStorage.setItem("canCount", JSON.stringify(count));
    }

    window.document.location = "./index.html";
    return;

});


prev.addEventListener("click", function () {

    if (empOrCan == true) {

        //stores prev questions data
        storeEmp();

        //lowers question num
        --questionNumber;


        if (questionNumber <= 5) {
            submit.style.display = "none";
            next.style.display = "block";
            flex[0].style.justifyContent = "space-between";
        }

        if (questionNumber == 0) {
            prev.style.display = "none";
            flex[0].style.justifyContent = "flex-end"
        }

        //puts question into header
        question.innerText = questions[questionNumber];

        //removes prev choices
        answers[questionNumber+1].style.display = 'none';

        //presents current choices
        answers[questionNumber].style.display = 'flex';

        //updates slider 
        displayUpdate();

    }
    else {

        //stores prev questions data
        storeCan();

        //lowers question num
        --canQuestionNumber;


        if (canQuestionNumber <= 6) {
            submit.style.display = "none";
            next.style.display = "block";
            flex[0].style.justifyContent = "space-between";
        }

        if (canQuestionNumber == 0) {
            prev.style.display = "none";
            flex[0].style.justifyContent = "flex-end"
        }

        //puts question into header
        canQuestion.innerText = canQuestions[canQuestionNumber];

        //removes prev choices
        canAnswers[canQuestionNumber+1].style.display = 'none';

        //presents current choices
        canAnswers[canQuestionNumber].style.display = 'flex';
    }



});




next.addEventListener("click", function () {

    if (empOrCan == true){

        storeEmp();

        ++questionNumber;
    
    
        if (questionNumber >= 0) {
            prev.style.display = "block";
            flex[0].style.justifyContent = "space-between";
        }
    
        if (questionNumber == 5) {
            next.style.display = "none";
            submit.style.display = "block";
            flex[0].style.justifyContent = "space-between";
        }
    
    
        question.innerText = questions[questionNumber];
    
        answers[questionNumber-1].style.display = 'none';
    
        answers[questionNumber].style.display = 'flex';
    
        displayUpdate();
    }
    else {

        storeCan();

        ++canQuestionNumber;
    
    
        if (canQuestionNumber >= 0) {
            prev.style.display = "block";
            flex[0].style.justifyContent = "space-between";
        }
    
        if (canQuestionNumber == 6) {
            submit.style.display = "block";
            next.style.display = "none";
            flex[0].style.justifyContent = "space-between";
        }
    
    
        canQuestion.innerText = canQuestions[canQuestionNumber];
    
        canAnswers[canQuestionNumber-1].style.display = 'none';
    
        canAnswers[canQuestionNumber].style.display = 'flex';
    

    }

});








yes.addEventListener("click", function() {

    if (empOrCan == true) {
        employer.college = true;
    }
    else {
        candidate.college = true;
    }

    yes.style.backgroundColor = "#003A9B";
    no.style.backgroundColor= "#259CD5";

});


no.addEventListener("click", function() {

    if (empOrCan == true)
        employer.college = false;
    else
        candidate.college = false;


    no.style.backgroundColor = "#003A9B";
    yes.style.backgroundColor= "#259CD5";

});