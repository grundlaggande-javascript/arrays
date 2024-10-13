// Creating an array
let fruits = ["apple", "banana", "cherry"];

// Checking the length of the array
console.log(fruits.length); // Outputs: 3

// Accessing elements by index
console.log(fruits[0]); // Outputs: apple
console.log(fruits[1]); // Outputs: banana

// Modifying elements
fruits[2] = "orange";
console.log(fruits); // Outputs: ["apple", "banana", "orange"]

// Adding elements to the end of the array
fruits.push("grape");
console.log(fruits); // Outputs: ["apple", "banana", "orange", "grape"]

// Removing the last element
let lastFruit = fruits.pop();
console.log(lastFruit); // Outputs: grape
console.log(fruits); // Outputs: ["apple", "banana", "orange"]

// Adding elements to the beginning of the array
fruits.unshift("mango");
console.log(fruits); // Outputs: ["mango", "apple", "banana", "orange"]

// Removing the first element
let firstFruit = fruits.shift();
console.log(firstFruit); // Outputs: mango
console.log(fruits); // Outputs: ["apple", "banana", "orange"]

// Looping through the array
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i])
}

// Problem: Find the sum of all the elements in the array
let arr = [1, 2, 3, 4, 5, 6, 7]

// Problem find the longest string in fruits