/**
 * Just a dumb spec to test module import in Karma applying browserify preprocessor
 */
const Greetings = require("../src/greetings");

describe("Greetings module logic",()=>{
    it("Should say HELLO", ()=>{
        let result = Greetings.hello();
        let expected ="hello";
        expect(result).toBe(expected);
    });
});