// Providing a type to querySelector:
const inputEl = document.querySelector<HTMLInputElement>("#username")!;
console.dir(inputEl);
inputEl.value = "Hacked!";

const btn = document.querySelector<HTMLButtonElement>(".btn")!;

// Without Generics...Lots of Repetition!
function numberIdentity(item: number): number {
  return item;
}
function stringIdentity(item: string): string {
  return item;
}
function booleanIdentity(item: boolean): boolean {
  return item;
}

// function identity(item: any): any{
//   return item;
// }

// With A Generic...Super Reusable!
function identity<T>(item: T): T {
  return item;
}

identity<number>(7);
identity<string>("hello");
// the former is the same as the syntax Array<string> that we saw before in other projects.

function getRandomElement<T>(list: T[]): T {
  const randIdx = Math.floor(Math.random() * list.length);
  return list[randIdx];
}

console.log(getRandomElement<string>(["a", "b", "c"]));
getRandomElement<number>([5, 6, 21, 354, 567, 234, 654]);
// but you don't even need to specify <number> like above, since TS infers it, as follows:
getRandomElement([1, 2, 3, 4]);

// if we are using TSX in react, TS gets a bit confused WHEN USING ARROW FUNCTIONS with generics. that's why you need to add a comma to the type, like this: <T,>

// Generics With Constraints:
// if you hover over 'merge', you will see that TS infers the return type. Ditto with 'comboObj'.
function merge<T extends object, U extends object>(object1: T, object2: U) {
  return {
    ...object1,
    ...object2,
  };
}

const comboObj = merge({ name: "colt" }, { pets: ["blue", "elton"] });
console.log(merge({ name: "Colt" }, { num: 9 }));
merge<{ name: string }, { pets: string[] }>(
  { name: "colt" },
  { pets: ["blue", "elton"] }
);

//

interface Lengthy {
  length: number;
}

function printDoubleLength<T extends Lengthy>(thing: T): number {
  return thing.length * 2;
}

// function printDoubleLength(thing: Lengthy): number {
//   return thing.length * 2;
// }

printDoubleLength("asdasd");
// a string has a length, that's why TS does not complain!
printDoubleLength(234); //Not allowed!

// DEFAULT TYPE PARAMETERS:
function makeEmptyArray<T = number>(): T[] {
  return [];
}

const nums = makeEmptyArray();
const bools = makeEmptyArray<boolean>();

// A Generic Class Example
interface Song {
  title: string;
  artist: string;
}
interface Video {
  title: string;
  creator: string;
  resolution: string;
}

class Playlist<T> {
  public queue: T[] = [];
  add(el: T) {
    this.queue.push(el);
  }
}

const songs = new Playlist<Song>();
const videos = new Playlist<Video>();
