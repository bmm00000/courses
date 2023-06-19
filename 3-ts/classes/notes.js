// CLASSES IN VANILLA JS:
class Player {
  static description =
    "This description only exists in the class itself, not in the instantiations of the class. For example, you can try this: console.log(Player.description)";

  numLives = 10;
  // private field (we can only access it inside of the class):
  #score = 0;
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  static getRandomPlayer() {
    return new Player("Andy", "Sanders");
  }

  taunt() {
    console.log("HULA HULA!");
  }

  loseLive() {
    this.numLives -= 1;
  }

  getScore() {
    return this.#score;
  }

  setScore(newScore) {
    this.#score = newScore;
  }

  // private method (we can only access it inside of the class):
  #saySecret() {
    return "This is a secret";
  }

  revealSecret() {
    return this.#saySecret();
  }

  // getters and setters are object accessors, that allow you to use them as fields, but in reality are methods, so you can add some logic:
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  set fullName(newFullName) {
    if (newFullName.trim() === "") throw new Error();
    const [first, last] = newFullName.split(" ");
    this.firstName = first;
    this.lastName = last;
  }
}

const player1 = new Player("Pepe", "McCartney");
// we use the getter:
console.log(player1.fullName);
// we use the setter:
player1.fullName = "Amy Johns";

//

class FootballPlayer extends Player {
  isFootballPlayer = true;
}

// js calls the constructor of the parent class:
const footballPlayer1 = new FootballPlayer("Leo", "Massa");

// but what if we also have a constructor in the child class? then we use 'super', in order to call the constructor of the parent class:
class ChessPlayer extends Player {
  constructor(first, last, years) {
    super(first, last);
    this.yearsPlaying = years;
  }
}

const chessPlayer1 = new ChessPlayer("Pepe", "Lassy", 3);
