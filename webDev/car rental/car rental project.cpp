#include <iostream>
#include <fstream>
#include <Windows.h>
#include <conio.h>
#include <time.h>

using namespace std;


//files needed: accounts, available cars, customer log

//accounts.txt
/*
username:
password:
admin:

username:
...


*/

//allcar.txt

//availcar.txt
/*
platenum brand model capacity color rateperhour rateper12hr rareperday transmission
...
*/

//customer.txt 
/*
name phonenum address
...
*/

class carRental {
private:

	struct user {
		string username,
			name,
			phone,
			address,
			password;

		bool adminStatus;
	};

	struct car {
		string plate,
			brand,
			model,
			year,
			capacity,
			color,
			transmission,
			rateperhr,
			rateperday;
	};

	bool searchUser(string user);
	bool searchPassword(string user, string pw);
	bool searchAdmin(string user);
	void loadCust();
	void loadCar();
	void loadTickets();

public:

	car cars[1000];
	user users[1000];

	int carCount = 0,
		userCount = 0;

	void menu();
	void adminPassword();
	void adminMenu();
	void userMenu();
	void addAdmin();
	void printCars();
	void addCar();
	void deleteCar();
	void signIn();
	void rentCar();
	void returnCar();

};

void carRental::menu() {

	int option;

	cout << "Welcome to the 'Car Rental' terminal" << endl << endl
		<< "Choose a menu:" << endl
		<< "1: Customer Menu" << endl << "2: Admin Menu" << "3: Exit" << endl;

	cin >> option;

	while (option != 1 && option != 2 && option != 3) {
		cout << option << " is not a valid input. Try again." << endl;
		cin << option;
	}

	if (option == 1)
		userMenu();
	else if (option == 2)
		adminPassword();
	else
		return 0; // may not be able to return 0 bc of void

}

void carRental::adminPassword() {

	string user,
		pw;

	cout << "Enter Username: ";
	cin >> user;

	while (!searchUser(user)) {
		cout << "No " << user << " in database. Try again" << endl;
		cin >> user;
	}

	cout << "Enter Password: ";
	cin >> pw;

	while (!searchPassword(user, pw)) {
		cout << "Incorrect Password. Try again" << endl;
		cin >> pw;
	}

	if (!searchAdmin(user)) {
		cout << "You do not have Admin permissions" << endl;
		menu();
	}
	else
		adminMenu();

}

void carRental::adminMenu() {

	int option;

	cout << "Menu options" << endl << "1: Add Admin" << endl
		<< "2: View Cars" << endl << "3: Add Car" << endl
		<< "4: Delete Car" << "5: Log off" << endl;

	while (option < 0 && option > 6) {
		cout << option << " is not a valid input. Try again." << endl;
		cin << option;
	}

	if (option == 1)
		addAdmin();
	else if (option == 2) {
		printCars();
		adminMenu();
	}
	else if (option == 3) {
		addCar();
	}
	else if (option == 4) {
		deleteCar();
	}
	else
		menu();
}

void carRental::userMenu() {

	int option;

	cout << "Menu options" << endl
		<< "1: Rent a Car" << endl
		<< "2: Return a Car" << endl;

	while (option != 1 && option != 2) {
		cout << option << " is not a valid input. Try again." << endl;
		cin << option;
	}

	if (option == 1)
		rentCar();
	else
		returnCar();

}

void carRental::addAdmin() {

	cout << "Enter Admin Username: ";
	cin >> users[userCount].username;

	cout << endl << "Enter Admin Password ";
	cin >> users[userCount].password;

	cout << endl << "Enter Admin Address ";
	cin >> users[userCount].address;

	cout << endl << "Enter Admin Phone Number ";
	cin >> users[userCount].phone;
	cout << endl;

	users[userCount].adminStatus = true;

	++userCount;
}


void carRental::printCars() {

	cout << "Plate Number" << ' ' << "Brand" << ' '
		<< "Model" << ' ' << "Year" << ' '
		<< "Capacity" << ' ' << "Color" << ' '
		<< "Transmission" << ' ' << "Rate/hr" << ' '
		<< "Rate/24hr" << endl;

	for (int i = 0; i < carCount; ++i) {
		cout << cars[i].plate << ' ' << cars[i].brand << ' '
			<< cars[i].model << ' ' << cars[i].year << ' '
			<< cars[i].capacity << ' ' << cars[i].color << ' '
			<< cars[i].transmission << ' ' << cars[i].rateperhr << ' '
			<< cars[i].rateperday << endl;
	}

}



int main() {

	






	return 0;
}


