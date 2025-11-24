// Nested Loops
for (let i = 1; i <= 3; i++) {      // Outer loop
    for (let j = 1; j <= 2; j++) {  // Inner loop
        console.log(i, j);
    }
}
/* When i = 1, the inner loop runs j = 1, 2
When i = 2, inner loop runs again j = 1, 2
When i = 3, inner loop runs again j = 1, 2
The inner loop completes all its rounds before the outer loop goes to the next number. */

// Breaks - break is used to stop a loop immediately.
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        break;  // stops when i becomes 3
    }
    console.log(i);
}



// While loop to sum numbers 1 to 10
let num = 1;
let sum = 0;

while (num <= 10) {
    sum += num; // same as sum = sum + num
    num++;
}

console.log("Total:", sum);
