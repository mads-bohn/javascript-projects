const input = require('readline-sync');
let str = "LaunchCode";

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.
let answer = str.slice(3) + str.slice(0,3);
console.log(answer);

//Use a template literal to print the original and modified string in a descriptive phrase.
console.log(`${str} in Pig Latin is ${answer}`);
//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.
let quantity = input.question('Input number of letters to move: ');
answer = str.slice(quantity) + str.slice(0,quantity);

//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.
if (quantity > str.length) {
    console.log('Invalid input: Please enter a quantity shorter than the string.');
} else if (quantity < 0) {
    console.log('Invalid input: Please enter a quantity greater than zero.');
} else {
    console.log(`${str} in Pig Latin is ${answer}`);
}