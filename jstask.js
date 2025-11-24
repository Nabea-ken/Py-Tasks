/*************************************************************
  TASK 1: Area of a Triangle
*************************************************************/
function task1() {
    let base = Number(prompt("Enter base of triangle:"));
    let height = Number(prompt("Enter height:"));
    let area = 0.5 * base * height;
    console.log("Area =", area);
}


/*************************************************************
  TASK 2: Even / Odd / Divisible by 4
*************************************************************/
function task2() {
    let num = Number(prompt("Enter a number:"));

    if (num % 2 === 0) {
        console.log("even");
        if (num % 4 === 0) console.log("divisible by 4");
    } else {
        console.log("odd");
    }
}



/*************************************************************
  TASK 4: Email Validation
*************************************************************/
function task4() {
    let email = prompt("Enter email:");
    if (email.includes("@") && email.includes(".")) console.log("Valid email");
    else console.log("Invalid email");
}


/*************************************************************
  TASK 5: Largest of 3 Numbers
*************************************************************/
function task5() {
    let a = Number(prompt("Enter first:"));
    let b = Number(prompt("Enter second:"));
    let c = Number(prompt("Enter third:"));

    let largest = a;
    if (b > largest) largest = b;
    if (c > largest) largest = c;

    console.log("Largest =", largest);
}


/*************************************************************
  TASK 6: Password (4 Attempts)
*************************************************************/
function task6() {
    let correct = "admin@123";
    let attempts = 4;

    while (attempts > 0) {
        let pass = prompt("Enter password:");
        if (pass === correct) {
            console.log("Access granted");
            return;
        }
        attempts--;
        console.log("Wrong password. Attempts left:", attempts);
    }
    console.log("Account blocked!");
}


/*************************************************************
  TASK 7: Student Grade
*************************************************************/
function task7() {
    let marks = Number(prompt("Enter marks (0–100):"));

    if (marks > 79) console.log("A");
    else if (marks >= 60) console.log("B");
    else if (marks >= 50) console.log("C");
    else if (marks >= 40) console.log("D");
    else console.log("E");
}


/*************************************************************
  TASK 8: Car Speed & Demerit Points
*************************************************************/
function task8() {
    let speed = Number(prompt("Enter speed:"));

    if (speed <= 70) console.log("Ok");
    else {
        let points = Math.floor((speed - 70) / 5);
        console.log("Points:", points);

        if (points > 12) console.log("License suspended");
    }
}


/*************************************************************
  TASK 9: Star Pattern
*************************************************************/
function task9() {
    let rows = Number(prompt("Enter rows:"));
    let star = "";

    for (let i = 1; i <= rows; i++) {
        star += "*";
        console.log(star);
    }
}


/*************************************************************
  TASK 10: Sum Stock From List
*************************************************************/
function task10() {
    let prods = [
        ["omo", "30kshs", "300"],
        ["milk", "50kshs", "200"],
        ["bread", "45kshs", "359"],
        ["coffee", "5kshs", "79"]
    ];

    let total = 0;
    for (let i = 0; i < prods.length; i++) {
        total += Number(prods[i][2]);
    }

    console.log("Total Stock =", total);
}


/*************************************************************
  TASK 11: Age in Years, Months, Days
*************************************************************/
function task11() {
    let dob = prompt("Enter DOB (YYYY-MM-DD):");
    let birth = new Date(dob);
    let today = new Date();

    let years = today.getFullYear() - birth.getFullYear();
    let months = today.getMonth() - birth.getMonth();
    let days = today.getDate() - birth.getDate();

    if (days < 0) { months--; days += 30; }
    if (months < 0) { years--; months += 12; }

    console.log(`${years} years, ${months} months, ${days} days`);
}


/*************************************************************
  TASK 12: Largest of 4 Numbers
*************************************************************/
function task12() {
    let n1 = Number(prompt("Enter number 1:"));
    let n2 = Number(prompt("Enter number 2:"));
    let n3 = Number(prompt("Enter number 3:"));
    let n4 = Number(prompt("Enter number 4:"));

    let largest = n1;
    if (n2 > largest) largest = n2;
    if (n3 > largest) largest = n3;
    if (n4 > largest) largest = n4;

    console.log("Largest =", largest);
}


/*************************************************************
  TASK 13: Email+Password Login (3 Attempts)
*************************************************************/
function task13() {
    let correctEmail = "admin@mail.com";
    let correctPass = "Admin@123";
    let attempts = 3;

    while (attempts > 0) {
        let email = prompt("Enter email:");
        let pass = prompt("Enter password:");

        if (email === correctEmail && pass === correctPass) {
            console.log("Login Successful");
            return;
        }

        attempts--;
        console.log("Wrong login. Attempts left:", attempts);
    }

    console.log("You have been blocked!");
}

