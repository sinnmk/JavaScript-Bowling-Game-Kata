let expect = require("chai").expect; let BowlingGame = require("../app/bowling-game");
let game;

describe("BowlingGame", function() {

  beforeEach( function(){
    game = new BowlingGame();
  });

  function rollMany(n, pins){
    for (var i = 0; i < n; i ++){
      game.roll(pins)
    }
  }

  function rollSpare(){
    game.roll(5)
    game.roll(5)
  }

  function rollStrike(){
    game.roll(10)
  }


  it("can score a gutter game", function() {
    rollMany(20, 0)
    expect(game.scoreGame()).to.equal(0);
  });

  it("can score a game of all ones", function() {
    rollMany(20,1)
    expect(game.scoreGame()).to.equal(20);
  });

  it("can score a spare", function() {
    rollSpare()
    game.roll(3)
    rollMany(17, 0)
    expect(game.scoreGame()).to.equal(16);
  });

  it("can score a strike", function() {
    rollStrike()
    game.roll(3)
    game.roll(4)
    rollMany(16, 0)
    expect(game.scoreGame()).to.equal(24);
  });

    var playGame = function(pin){
     for(var x = 20; x >= 1; x-=1){
       game.roll(pin);
     }
   };
});
