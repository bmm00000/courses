// CLASSES IN TS:
class Player {
  public readonly first: string;
  public readonly last: string;
  private score: number = 0;

  constructor(first: string, last: string) {
    this.first = first;
    this.last = last;
  }

  private secretMethod(): string {
    return "This is a secret";
  }
}

const player1 = new Player("Elton", "Steele");

// The modifiers 'readonly', 'public' and 'private' apply to TS, not to vanilla JS.
// by default, fields are 'public', but you can still use the keyword to be more explicit about public and private fields.
// instead of the 'private' keyword (exclusive to ts), you can use the '#' private identifier (exclusive to js), but you can't use both. The latter gives you protection, not only before you compile, but also at runtime, since it's js.

// parameter properties shortcut (same result as Player, but with shortcut: see compiled js file: it's the same result):
class Gamer {
  protected _score: number = 0;

  constructor(public first: string, public last: string) {}

  private secretMethod(): string {
    return "This is a secret";
  }

  get score(): number {
    return this._score;
  }

  set score(newScore: number) {
    if (newScore < 0) throw new Error("This is a negative number!");
    this._score = newScore;
  }
}

class AdminGamer extends Gamer {
  public isAdmin: boolean = true;

  maxScore() {
    this._score = 999999;
  }
}
// the 'protected' modifier is equivalent to 'private', but you can also access that field in child classes.

const gamer1 = new Gamer("Elton", "Steele");

// IMPLEMENTING INTERFACES IN CLASSES:
interface Colorful {
  defaultColor: string;
  color: string;
}

interface Printable {
  print(): void;
}

class Jacket implements Colorful, Printable {
  defaultColor = "red";
  constructor(public color: string) {}

  print(): void {
    console.log("printing...");
  }
}

// ABSTRACT CLASSES (IT ONLY EXISTS IN TS, NOT IN JS): you can not instantiate them, only use them for child classes. they are mixcture of interfaces and classes:
abstract class Human {
  constructor(public citizenship: string) {}

  // same as an interface:
  abstract greetInYourLanguage(): string;

  // same as a class:
  greetInEnglish() {
    return "hello there!";
  }
}

class Spanish extends Human {
  constructor(citizenship: string, private purchasingPower: string) {
    super(citizenship);
  }

  greetInYourLanguage(): string {
    return "Hola!";
  }

  revealPurchasingPower(): string {
    return `${this.purchasingPower}`;
  }
}
