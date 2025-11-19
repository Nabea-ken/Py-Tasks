
let my_object = [23, "Jane", 560, ["Lesson", "Maths", { currency: "KES" }], 987, 76, "John"];

// 1. Display "KES"
console.log("1. KES:", my_object[3][2].currency);

// 2. Display 560
console.log("2. 560:", my_object[2]);

// 3. Display "Maths"
console.log("3. Maths:", my_object[3][1]);

// 4. Add another key “amount”: 90 in the currency object
my_object[3][2].amount = 90;
console.log("4. Updated currency object:", my_object[3][2]);

// 5. Reverse 987 to 789 (without using built-in reverse() and without manually writing 789)
let number = my_object[4];   // 987
let reversed = 0;

while (number > 0) {
    let digit = number % 10;      // get last digit
    reversed = reversed * 10 + digit;  // build reversed number
    number = Math.floor(number / 10);  // remove last digit
}

console.log("5. Reversed number (987 → 789):", reversed);

// (Optional) update it in the array if needed
my_object[4] = reversed;


// 6. Change the name "John" to "Jane"
for (let i = 0; i < my_object.length; i++) {
    if (my_object[i] === "John") {
        my_object[i] = "Jane";
    }
}

console.log("6. Updated array after changing John → Jane:", my_object);
