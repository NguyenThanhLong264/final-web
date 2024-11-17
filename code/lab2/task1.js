// Write a JavaScript program to convert temperatures to and from Celsius and Fahrenheit
const prompt = require('prompt-sync')();
// JavaScript program to convert Celsius to Fahrenheit
var cel = prompt("Enter a celsius value: ");

// conversion factor to convert Celcius to Fahrenheit
var fahrenheit = ((cel * 1.8) + 32).toFixed(2);

console.log(`${cel} degree celsius is equal to ${fahrenheit} degree fahrenheit.`);

// Convert Fahrenheit to Celsius
var fah = prompt("Enter a fahrenheit value: ");

var celsius = ((fah - 32) / 1.8).toFixed(2);

console.log(`${fah} degree fahrenheit is equal to ${celsius} degree celsius`);