// Write a JavaScript program to find the largest of five numbers. Display an alert box to show the result.
const prompt = require('prompt-sync')();

// Enter the values
const a = prompt("Enter the value a: ");
const b = prompt("Enter the value b: ");
const c = prompt("Enter the value c: ");
const d = prompt("Enter the value d: ");
const e = prompt("Enter the value e: ");

const numArr = [a, b, c, d, e];

const largestNum = Math.max(...numArr);

console.log(`The largest number is: ${largestNum}`);