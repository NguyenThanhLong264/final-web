// Write a JavaScript program that iterates from 1 to 15. For each iteration, it will check if the current number is odd or even, and display a message to the screen. The output should be:

// 1 is odd, 2 is even
const prompt = require('prompt-sync')();

const x = prompt("Enter the x number: ");

for (let x = 1; x <= 15; x++) {
	if (x % 2 == 0) {
		console.log(x + " is even");
	} else {
		console.log(x + " is odd");
	}
}