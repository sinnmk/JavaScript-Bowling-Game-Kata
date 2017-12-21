let expect = require("chai").expect;
let primes = require("../app/bowling-game");

describe("Bowling Game", () => {

  it("Returns 1", () => {
    expect(primes.returnOne()).equal(1)
  });

});
