// =========================
// TASK 1: Reverse array WITHOUT loops or reverse()
// =========================

const arr = [10, 20, 30, 40, 50];

const reversedArr = [arr[4], arr[3], arr[2], arr[1], arr[0]];
console.log("1. Reversed Array:", reversedArr);


// =========================
// TASK 2: Split an array into chunks of size n using spread & rest
// =========================

const arr2 = [1, 2, 3, 4, 5, 6, 7, 8];

// Get chunk size from user
let n = Number(prompt("Enter chunk size:"));

// Prepare the array that will hold chunks
let chunked = [];

// Copy arr2 using spread
let temp = [...arr2];  // use spread

// Loop until temp is empty
while (temp.length > 0) {
  // Use spread + rest to take first n elements
  const [ ...firstN ] = temp.slice(0, n);

  chunked.push(firstN);

  // Remove the first n elements using rest
  const [ ...rest ] = temp.slice(n);
  temp = rest;
}

console.log(`Chunks of size ${n}:`, chunked);

// =========================
// TASK 3: Safe Access, Optional Chaining & Defaults
// =========================

const userProfile = {
  id: 101,
  name: "John Doe",
  settings: {
    theme: "dark",
    notifications: {
      email: true,
      sms: false,
    },
  },
  posts: [
    { id: 1, title: "Hello", comments: [{ text: "Nice post!" }] },
    { id: 2, title: "World" },
  ],
  getStatus: () => "Active",
};


// 1. Get theme → default "light"
const theme = userProfile?.settings?.theme ?? "light";
console.log("3.1 Preferred Theme:", theme);


// 2. Check SMS notifications → default false
const smsStatus = userProfile?.settings?.notifications?.sms ?? false;
console.log("3.2 SMS Enabled:", smsStatus);


// 3. Get first comment of second post → default "No comments"
const firstComment =
  userProfile?.posts?.[1]?.comments?.[0]?.text ?? "No comments";
console.log("3.3 First Comment on Post 2:", firstComment);


// 4. Safely call getStatus() → default "Unknown"
const status = typeof userProfile.getStatus === "function"
  ? userProfile.getStatus()
  : "Unknown";
console.log("3.4 User Status:", status);


// 5. Access non-existing field → default "standard"
const layoutMode =
  userProfile?.settings?.layout?.mode ?? "standard";
console.log("3.5 Layout Mode:", layoutMode);
