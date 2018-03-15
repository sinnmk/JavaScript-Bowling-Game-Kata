function sum(arr) {
  return arr.reduce((sum, x) => sum + x)
}

class BowlingGame {

  constructor(){
    this.rolls = []
    this.currentRoll = 0
  }
  
  roll(pins){
    this.rolls[this.currentRoll] = pins
    this.currentRoll++
  }

  scoreGame(){  
    var frameIndex = 0
    var score = 0
    for (var frame = 0; frame < 10; frame++){
      if(this.isStrike(frameIndex)){
        score += 10 + this.strikeBonus(frameIndex) 
        frameIndex++
      } else if (this.isSpare(frameIndex)){
        score += 10 + this.spareBonus(frameIndex) 
        frameIndex += 2
      } else {
        score += this.sumOfBallsInFrame(frameIndex) 
        frameIndex += 2
      }
    }
    return score
  }

  isSpare(frameIndex){
    return this.rolls[frameIndex] + this.rolls[frameIndex+1] == 10
  }

  spareBonus(frameIndex){
    return this.rolls[frameIndex + 2]
  }

  isStrike(frameIndex){
    return this.rolls[frameIndex] == 10
  }

  strikeBonus(frameIndex){
    return this.rolls[frameIndex+1] + this.rolls[frameIndex+2]
  }

  sumOfBallsInFrame(frameIndex){
    return this.rolls[frameIndex] + this.rolls[frameIndex+1]
  }
}

module.exports = BowlingGame;
