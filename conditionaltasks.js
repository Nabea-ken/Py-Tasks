// 1
let str = prompt("Enter a string;");

if (str.length === 0) {
    console.log("Empty");
} else if (str.length <= 5) {
    console.log("Short");
} else if (str.length <= 10) {
    console.log("Medium");
} else {
    console.log("Long");
}


// 2
let age = Number(prompt("Enter your age:"));
let price;

if (age < 12) {
    price = 5;
    console.log("Ticket price:", price);
} else if (age < 18) {
    price = 10;
    console.log("Ticket price:", price);
} else if (age < 60) {
    price = 20;
    console.log("Ticket price:", price);
} else if(age >=60 && age < 150){
    price = 15;
    console.log("Ticket price:", price);
} else{
    console.log("Enter a valid age!")
}


// 3
let amount = Number(prompt("To get your discount, Enter your purchase amount:"));
let discount;

if (amount >= 100) {
    discount = 20;
} else if (amount >= 50) {
    discount = 10;
} else {
    discount = 0;
}

console.log("Discount:", discount);


// 4
let val = 5;

if (val === 5 || val === "5") {
    console.log("Match");
} else {
    console.log("No Match");
}


// 5
let str2 = prompt("Enter a value: ")
//"" - empty string
//" " - whitespace
if ((str2.length == 0 ) || ((str2.trim).length == 0)){
    console.log("Empty")
}else if(typeof(Number(str2)) == Number){
    console.log("Number")
}else{
    console.log("Text")
}

let str3 = "123";

if (str3.trim() === "") {
    console.log("Empty");
} else if (!isNaN(str3)) {
    console.log("Number");
} else {
    console.log("Text");
}


// 6
let num1 = 12.5;

// if (typeof(num) != "number"){
    // console.log("Not a number")
// }
if (isNaN(num1)) {                         //Checks if the input is not a number.
    console.log("Not a number");
} else if (Number.isInteger(num1)) {       //Checks if the number is a whole number (no decimals).
    console.log("Integer"); 
} else {
    console.log("Float");
}

let num2 = prompt("Enter num2");

if(typeof(Number(num2)) != "number"){
    console.log("Not a number")
}else if (num2.includes(".")){
    console.log("float")
}else{
    console.log("integer")
}

// 7
let month = prompt("Enter a month: ");
month = month.toLowerCase().trim();

if (["september", "october", "november"].includes(month)) {
    console.log("Autumn");
} else if (["december", "january", "february"].includes(month)) {
    console.log("Winter");
} else if (["march", "april", "may"].includes(month)) {
    console.log("Spring");
} else if (["june", "july", "august"].includes(month)) {
    console.log("Summer");
} else {
    console.log("Invalid month");
}


// 8
let a = Number(prompt("Enter a Number: "));
let b = Number(prompt("Enter a Number: "));
let c = Number(prompt("Enter a Number: "));

let small, middle, large;

if (a <= b && a <= c) {
    small = a;
    if (b <= c) {
        middle = b;
        large = c;
    } else {
        middle = c;
        large = b;
    }
}
else if (b <= a && b <= c) {
    small = b;
    if (a <= c) {
        middle = a;
        large = c;
    } else {
        middle = c;
        large = a;
    }
}
else {
    small = c;
    if (a <= b) {
        middle = a;
        large = b;
    } else {
        middle = b;
        large = a;
    }
}

console.log("Ascending order:", small, middle, large);


// 9
let num = prompt("Enter a number:");

let lastDigit = num[num.length - 1];   // get last character
let digit = Number(lastDigit);         // convert to number

if (digit % 3 === 0) {
    console.log("Last digit is divisible by 3");
} else {
    console.log("Not divisible by 3");
}

let value = prompt("Enter a value: ")

if(typeof(Number(value)) != "number"){
    console.log("Not a number!, input numbers only")
}else if((value.slice(-1))%3 == 0){
    console.log("Last digit divisible by 3")
}else{
    console.log("Last digit not divisible by 3")
}