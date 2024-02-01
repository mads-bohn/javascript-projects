let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6,
   move: function () {return Math.floor(Math.random()*11)}
};

let superChimpTwo = {
   name: "Brad",
   species: "Chimpanzee",
   mass: 11,
   age: 6,
   move: function () {return Math.floor(Math.random()*11)}
};

let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5,
   move: function () {return Math.floor(Math.random()*11)}
};

let dog = {
   name: "Leroy",
   species: "Beagle",
   mass: 14,
   age: 5,
   move: function () {return Math.floor(Math.random()*11)}
};

let microbe = {
   name: "Almina",
   species: "Tardigrade",
   mass: 0.0000000001,
   age: 1,
   move: function () {return Math.floor(Math.random()*11)}
};


// After you have created the other object literals, add the astronautID property to each one.
superChimpOne["astronautID"] = 1;
superChimpTwo["astronautID"] = 2;
salamander["astronautID"] = 3;
dog["astronautID"] = 4;
microbe["astronautID"] = 5;
// Create an array to hold the animal objects.
let crew = [superChimpOne, superChimpTwo, salamander, dog, microbe];
// Print out the relevant information about each animal.
const crewReports = (animal) => {
   return `${animal.name} is a ${animal.species}. They are ${animal.age} years old and ${animal.mass} kilograms. Their ID is ${animal.astronautID}.`;
}

// Start an animal race!
let fitnessTest = (candidates) => {
   let results = [];
   let stepsTaken;
   let turnsTaken;
   for (let i = 0; i < candidates.length; i++) {
      stepsTaken = 0;
      turnsTaken = 0;
      while (stepsTaken < 20) {
         stepsTaken += candidates[i].move();
         turnsTaken++;
      }
      results.push(`${candidates[i].name} took ${turnsTaken} turns to take 20 steps.`);
   }
   return results;
}

console.log(fitnessTest(crew));