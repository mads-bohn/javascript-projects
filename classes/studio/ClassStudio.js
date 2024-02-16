//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.
class CrewCandidate {
    constructor (name, mass, scores) {
        this.name = name;
        this.mass = mass;
        this.scores = scores;
    }
    
    addScore(newScore) {
        this.scores.push(newScore);
    }

    average() {
        let total = 0;
        for (let i = 0; i < this.scores.length; i++) {
            total += this.scores[i];
        }
        total = total / this.scores.length;
        return Math.round(total *10) / 10;
    }

    status() {
        if (this.average() > 90) {
            return 'Accepted';
        } else if (this.average() > 80) {
            return 'Reserve';
        } else if (this.average() > 70) {
            return 'Probationary';
        } else {
            return 'Rejected';
        }
    }
};

let candidateBear = new CrewCandidate('Bubba Bear', 135, [88, 85, 90]);
let candidateMaltese = new CrewCandidate('Merry Maltese', 1.5, [93, 88, 97]);
let candidateGator = new CrewCandidate('Glad Gator', 225, [75, 78, 62]);

console.log(`${candidateBear.name} earned an average test score of ${candidateBear.average()} and has a status of ${candidateBear.status()}`);
console.log(`${candidateMaltese.name} earned an average test score of ${candidateMaltese.average()} and has a status of ${candidateMaltese.status()}`);
console.log(`${candidateGator.name} earned an average test score of ${candidateGator.average()} and has a status of ${candidateGator.status()}`);
//Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.



//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.

let reserveCount = 0;
while (candidateGator.status() !== 'Reserve') {
    candidateGator.addScore(100);
    reserveCount++;
}

console.log(candidateGator.scores);
console.log(`It took ${candidateGator.name} ${reserveCount} extra tests to pass.`)