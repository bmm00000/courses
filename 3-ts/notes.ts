// ts does static checking: detects errors without running code.

// interesting fact about ts:
function callSinger({
  name,
  lastName,
}: {
  name: string;
  lastName: string;
}): string {
  return `Hey you singer ${name} ${lastName}`;
}
// ts complains here:
callSinger({ name: "Mick", lastName: "Jagger", age: 88 });
// but ts does not complain here:
const singer = { name: "Mick", lastName: "Jagger", age: 99 };
callSinger(singer);

// optional properties and the readyonly modifier:
type Point = {
  readonly id: string;
  x: number;
  y: number;
  z?: number;
};

const point1: Point = { id: "asdf", x: 1, y: 1 };
// ts will complain here:
point1.id = "jasldfj";

// intersection types:
type ColorfulPoint = Point & { color: string };
const colorfulPoint1 = { id: "asdf", x: 1, y: 1, color: "blue" };

// when you compile ts to js, enums result in a bunch of new js code. you can avoid that by using the keyword 'const' in front of 'enum'

// interfaces:
interface Person {
  readonly id: string;
  name: string;
  nickName?: string;
  sayHi: (greeting: string) => string;
  // or:
  // sayHi(greeting: string): string
}

const person1: Person = {
  id: "123",
  name: "Tom",
  sayHi(someGreeting: string) {
    return `I'm ${this.name}, ${someGreeting}`;
  },
};
