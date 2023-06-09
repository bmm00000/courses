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

// tsc --init, to generate tsconfig.json file.
// tsc [name of file]?, compile one file, or the whole directory.
// tsc -w [name of file]?, watch mode for one file, or for the whole directory.

// in tsconfig.json, if 'lib' is commented out, a default set of type declarations are included (eg. things found in browser environments like 'document', etc.). you can see these type declarations double-clicking and selecting 'type definition', or in the github repo of typescript.
// if we un-comment 'lib' and leave the array empty, then this default set of type declarations is not included, and we have to add our own.

// in some repos (for example in DefinitelyTyped), you will see that imports and exports are managed through Namespaces (this is a TS way of importing and exporting files). However, TS is moving away from that, and towards ESModules.
// https://www.typescriptlang.org/docs/handbook/2/modules.html#non-modules
// if you don't import/export in js, you will see that variables, functions, objects, etc. that you define in one file, can be recognized in other files, because it's all considered in the global scope. But as soon as you add the keyword 'export', that won't happen anymore, since it will be considered a modul and not a script. That's point of modules: you different 'name spaces' for your code, so it doesn't clash with the code of other files.
// commonJS and ESmodules work with node, but not in the browser (well, to be precise, ESmodules work in modern browers, but you have to use the type='module' attribute in the script tag). That's why you have different options when using several files: 1) add the scripts in the right orer in the html file, 2) specify 'module' to 'ES6' in tsconfig.json and then use the type="module" attribute in the script tag of the html file (in this case, you have to use a local server to open the html file, because only with the file protocol does not work).
