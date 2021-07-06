#include <iostream>
#include <vector>


using namespace std;


class MatchMaker { 

    private:
        struct Employer {

            int age,
            ageWeight,
            salary,
            salaryWeight,
            exp,
            expWeight,
            pressureRate,
            pressureRateWeight,
            commRate,
            commRateWeight,
            collegeWeight;
        
            bool college,
                infoEntered = false;
        };

        Employer emp;

        struct Candidate {
            
            string name;

            int age,
            salary,
            exp,
            pressureRate,
            commRate,
            score;
        
            bool college;
        };
        
        vector<Candidate> candidates; //dynamic array for candidates

        int candidateCount = 0;

        int impQuestion();
        int oneToten(int rate);
        void findCandidate();

    public:

        void pickAjob();
        void HRmenu(); //ask for candidate or employer
        void candidate();
        void employer();

};


void MatchMaker::pickAjob() {

    int choice;

    cout << "Pick the job you'd like to use MatchMake on: " << endl
        << "1. HR Manager" << endl
        << "2. Exit" << endl;


    cin >> choice;

    while (choice != 1 && choice !=2) {

        cout << choice << " is not a valid option. Try again." << endl;

        cin >> choice;
    }

    if (choice == 2) {
        cout << "goodbye";
        cin.ignore();
        return;
    }
    else {
        HRmenu();
    }

}

void MatchMaker::HRmenu() {

    int choice;

    cout << "Are you a candidate or employer? " << endl
        << "1. Candidate" << endl
        << "2. Employer" << endl;


    cin >> choice;

    while (choice != 1 && choice !=2) {

        cout << choice << " is not a valid option. Try again." << endl;

        cin >> choice;
    }

    if (choice == 1) {
        candidate();
    }
    else {
        employer();
    }
}


void MatchMaker::candidate() {

    Candidate newCandidate;

    cout << "What's your name? " << endl;
    cin >> newCandidate.name;

    cout << "What's your age? " << endl;
    cin >> newCandidate.age;

    cout << "What is your preferred salary? " << endl;
    cin >> newCandidate.salary;

    cout << "How many years of experience in HR do you have? " << endl;
    cin >> newCandidate.exp;

    cout << "On a scale of 1-10, how comfortable are you in stressful situations? " << endl;
    cin >> newCandidate.pressureRate;

    while (newCandidate.pressureRate > 10 || newCandidate.pressureRate < 1) {
        cout << newCandidate.pressureRate << " is not a valid option. Try again." << endl;

        cin >> newCandidate.pressureRate;
    }

    cout << "On a scale of 1-10, how would you rate your communication skills? " << endl;
    cin >> newCandidate.commRate;

    while (newCandidate.commRate > 10 || newCandidate.commRate < 1) {
        cout << newCandidate.commRate << " is not a valid option. Try again." << endl;

        cin >> newCandidate.commRate;
    }

    int choice;
    cout << "Do you have a college degree? " << endl
        << "1. Yes    2. No" << endl;
    cin >> choice;

    while (choice !=1 && choice != 2) {
        cout << choice << " is not a valid option. Try again." << endl;
        cin >> choice;
    }

    if (choice == 1) {
        newCandidate.college == true;
    }
    else {
        newCandidate.college == false;
    }

    candidates.push_back(newCandidate);

    candidateCount++;

    HRmenu();
}

int MatchMaker::impQuestion() {

    int rate;

    cout << "On a scale of 1-10, how important is this qualification to you? " << endl;
    cin >> rate;
    
    return oneToten(rate);
}

int MatchMaker::oneToten(int rate) {

    while (rate > 10 || rate < 1) {
        cout << rate << " is not a valid option. Try again." << endl;
        cin >> rate;
    }

    return rate;
}

void MatchMaker::employer() {

    int rate;

    cout << "What would you like to do?" << endl <<
    "1. Enter Employer preferences    2. Run MatchMake on candidates" << endl;
    cin >> rate;

    if (rate == 2) {
        findCandidate();
        cin.ignore();
        return;
    }

    cout << "At least, how old is your ideal canidate? " << endl;
    cin >> emp.age;

    emp.ageWeight = impQuestion();


    cout << "What is your preferred salary for the position? " << endl;
    cin >> emp.salary;

    emp.salaryWeight = impQuestion();


    cout << "At least how many years of experience should your employee have? " << endl;
    cin >> emp.exp;

    emp.expWeight = impQuestion();


    cout << "On a scale of 1-10, how comfortable in stressful situations should your employee be? " << endl;
    cin >> rate;

    emp.pressureRate = oneToten(rate);
    emp.pressureRateWeight = impQuestion();


    cout << "On a scale of 1-10, how good should your employee's communication skills be? " << endl;
    cin >> rate;

    emp.commRate = oneToten(rate);
    emp.pressureRateWeight = impQuestion();


    int choice;
    cout << "Should your employee have a college degree? " << endl
        << "1. Yes    2. No" << endl;
    cin >> choice;

    while (choice !=1 && choice != 2) {
        cout << choice << " is not a valid option. Try again." << endl;
        cin >> choice;
    }

    if (choice == 1) {
        emp.college == true;
    }
    else {
        emp.college == false;
    }

    impQuestion();

    emp.infoEntered = true;

    HRmenu();
}

void MatchMaker::findCandidate() {

    if (candidateCount == 0) {
        cout << "No candidates have been enetered into the system. Enter some and try again." << endl;

        HRmenu();
    }

    if (emp.infoEntered == false) {
        cout << "The employer has not yet set their preferences." << endl;
        HRmenu();
    }

    if (candidateCount == 1) {
        cout << candidates[0].name << " is the only candidate. Therefore, they are best qualified for the posistion." << endl;
    }

    for (int i = 0; i < candidateCount; ++i) {

        if (candidates[i].age >= emp.age) {
            candidates[i].score += emp.ageWeight * 1;
        }

        if (candidates[i].salary <= emp.salary) {
            candidates[i].score += emp.salaryWeight * 1;
        }

        if (candidates[i].exp >= emp.exp) {
            candidates[i].score += emp.expWeight * 1;
        }
        
        if (candidates[i].pressureRate >= emp.pressureRate) {
            candidates[i].score += emp.pressureRateWeight * 1;
        }

        if (candidates[i].commRate >= emp.commRate) {
            candidates[i].score += emp.commRateWeight * 1;
        }

        if (candidates[i].college == emp.college) {
            candidates[i].score += emp.collegeWeight * 1;
        }
    }


    int bestScore;

    for (int i = 0; i < candidateCount - 1; ++i) {

        if (candidates[i].score < candidates[i+1].score) {
            bestScore = i+1;
        }
    }

    ///What happens when two candidates tie
    cout << "The candidate best qualified for the position is " << candidates[bestScore].name << "!" << endl;

    cin.ignore();

}