const header = document.querySelector('h1');
var employer;
var candidates;
var count = localStorage.getItem("canCount");
count = JSON.parse(count);

var bestScore = 0;


if (localStorage.getItem("employer") == null) {
    alert("no employer preferences have been entered");
    window.document.location = "./index.html";
}
else {
    employer = localStorage.getItem("employer");
    employer = JSON.parse(employer);
}



if (count < 2){
    alert("no enough candidates have entered the system");
    window.document.location = "./index.html";
}
else {
    candidates = localStorage.getItem("canArray");
    candidates = JSON.parse(candidates);
}


for (let i = 0; i < count; ++i) {

    if (candidates[i].age >= employer.age) {
        candidates[i].score += employer.weightArray[0] * 1;
    }

    if (candidates[i].salary <= employer.salary) {
        candidates[i].score += employer.weightArray[1] * 1;
    }

    if (candidates[i].exp >= employer.exp) {
        candidates[i].score += employer.weightArray[2] * 1;
    }

    if (candidates[i].pressure >= employer.pressure) {
        candidates[i].score += employer.weightArray[3] * 1;
    }

    if (candidates[i].comm >= employer.comm) {
        candidates[i].score += employer.weightArray[4] * 1;
    }

    if (candidates[i].college == employer.college) {
        candidates[i].score += employer.weightArray[5] * 1;
    }
}

for (let i = 0; i < count - 1; ++i) {

    if (candidates[i].score < candidates[i+1].score) {
        bestScore = i+1;
    }

}

header.innerHTML = candidates[bestScore].name + " is the best candidate for the job!";


