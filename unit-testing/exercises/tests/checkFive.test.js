const test = require('../checkFive.js');

    describe("checkFive", function(){

    test("Should return 'num is less than 5' if num < 5", function() {
       let output = checkFive(2);
       expect(output).toEqual("2 is less than 5.");
    });

    test("Should return 'num is greater than 5' if num > 5", function() {
        let output = checkFive(7);
        expect(output).toEqual("7 is greater than 5.");
    });

    test("Should return 'num is equal to 5' if num === 5", function() {
        let output = checkFive(5);;
        expect(output).toEqual("5 is equal to 5.");
    });

 });