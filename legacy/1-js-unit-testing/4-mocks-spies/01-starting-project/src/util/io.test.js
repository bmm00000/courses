import { vi, it, expect } from "vitest";

// vi.mock("path", () => {
//   return {
//     // since path is an unnamed import in io.js, we need to use 'default':
//     default: {
//       join: vi.fn((...args) => {
//         return args[args.length - 1];
//       }),
//     },
//   };
// });
vi.mock("path");
vi.mock("fs");
// this kicks off vitest (or jest) automocking algorithm: looks for the fs module, finds all the functions there, and replaces them with empty spy functions if we don't have any custom implementation (before that, if we have a __mocks__ folder, it will replace them with the functions of our modules there).
// vi.mock is hoisted here, even if we write it after the other imports, but that's not the case with jest.mock.

import { promises as fs } from "fs";
import writeData from "./io";

it("calls the writeFile method of the fs module with the right arguments", () => {
  const data = "This is the data";
  const fileName = "data.txt";

  writeData(data, fileName);

  expect(fs.writeFile).toHaveBeenCalledWith(fileName, data);
});

it("returns a promise that resolves", () => {
  const data = "This is the data";
  const fileName = "data.txt";

  return expect(writeData(data, fileName)).resolves.toBeUndefined();
});

// vi.mock works with built-in and 3rd party modules, but also with your own modules.
// vi.mock('fs'): this will find the module and replace all functions there with empty spy functions (or with your functions of the modules of the __mocks__ folder, if you have such folder).
// vi.mock mocks the module in such a way that it affects all other tests as well, but vitest sorts the tests out so that the files without the mock are run first. Therefore, it's a good idea to write the mock in all files that we want to use it in.
