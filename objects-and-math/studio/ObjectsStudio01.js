// Code your selectRandomEntry function here:
function selectRandomEntry(arr) {
  let i = Math.floor(Math.random()*arr.length);
  return arr.splice(i, 1)[0];
}

// Code your buildCrewArray function here:

let idNumbers = [291, 414, 503, 599, 796, 890];
let selectedCrew = [];

selectedCrew.push(selectRandomEntry(idNumbers));
selectedCrew.push(selectRandomEntry(idNumbers));
selectedCrew.push(selectRandomEntry(idNumbers));


// Here are the candidates and the 'animals' array:
let candidateA = {
  'name':'Gordon Shumway',
  'species':'alf',
  'mass':90,
  'o2Used':function(hrs){return 0.035*hrs},
  'astronautID':414
};
let candidateB = {
  'name':'Lassie',
  'species':'dog',
  'mass':19.1,
  'o2Used':function(hrs){return 0.030*hrs},
  'astronautID':503
};
let candidateC = {
  'name':'Jonsey',
  'species':'cat',
  'mass':3.6,
  'o2Used':function(hrs){return 0.022*hrs},
  'astronautID':796
};
let candidateD = {
  'name':'Paddington',
  'species':'bear',
  'mass':31.8,
  'o2Used':function(hrs){return 0.047*hrs},
  'astronautID':291
};
let candidateE = {
  'name':'Pete',
  'species':'tortoise',
  'mass':417,
  'o2Used':function(hrs){return 0.010*hrs},
  'astronautID':599
};
let candidateF = {
  'name':'Hugs',
  'species':'ball python',
  'mass':2.3,
  'o2Used':function(hrs){return 0.018*hrs},
  'astronautID':890
};

let animals = [candidateA,candidateB,candidateC,candidateD,candidateE,candidateF];

// Code your template literal and console.log statements:

function buildACrew (idArray, animalArray) {
  let crew = [];
  for (let i = 0; i < animalArray.length; i++) {
    if (selectedCrew.includes (animalArray[i].astronautID)) {
      crew.push(animalArray[i].name);
    }
  }
  return crew;
}

console.log(selectedCrew);

let announcementArray = buildACrew(selectedCrew, animals);

console.log(`${announcementArray[0]}, ${announcementArray[1]}, and ${announcementArray[2]} are going to space!`)