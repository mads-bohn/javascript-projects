// Declare and assign the variables below
let shuttleName = 'Determination';
let shuttleMph = 17500;
const kmToMars = 225000000;
const kmToMoon = 384400;
const milesPerKm = 0.621;
// Use console.log to print the 'typeof' each variable. Print one item per line.
console.log(typeof shuttleName);
console.log(typeof shuttleMph);
console.log(typeof kmToMars);
console.log(typeof kmToMoon);
console.log(typeof milesPerKm);
// Calculate a space mission below
let milesToMars = kmToMars * milesPerKm;
let hoursToMars = milesToMars / shuttleMph;
let daysToMars = hoursToMars / 24;
// Print the results of the space mission calculations below
console.log(`${shuttleName} will take ${daysToMars} days to reach Mars.`);
// Calculate a trip to the moon below
let daysToMoon = (kmToMoon * milesPerKm) / shuttleMph / 24;
// Print the results of the trip to the moon below
console.log(`${shuttleName} will take ${daysToMoon} days to reach the Moon.`)