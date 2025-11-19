// Assignment 1:
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

// Combine using concat()
let combinedArray = arr1.concat(arr2);
console.log("Combined Array:", combinedArray);

// Remove first element using shift()
combinedArray.shift();
console.log("After shift() (first element removed):", combinedArray);


// Assignment 2: Extract Subarray
let sourceArray = [10, 20, 30, 40, 50, 60];

// Extract index 2 to 4 using slice()
// slice(2, 5) → extracts 30, 40, 50
let extractedArray = sourceArray.slice(2, 5);
console.log("Extracted Array (before modification):", extractedArray);

// Replace extractedArray elements using splice()
extractedArray.splice(0, 3, 'x', 'y', 'z');
console.log("Extracted Array (after splice):", extractedArray);

// Display original array (unchanged)
console.log("Original sourceArray:", sourceArray);
