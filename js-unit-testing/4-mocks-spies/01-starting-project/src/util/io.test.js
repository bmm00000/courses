import { vi, it, expect } from "vitest";

vi.mock("fs");
// vi.mock is hoisted here, even if we write it after the other imports, but that's not the case with jest.mock.

import writeData from "./io";
import { promises as fs } from "fs";

it("calls the writeFile method of the fs module", () => {
  const data = "This is the data";
  const fileName = "data.txt";

  writeData(data, fileName);

  expect(fs.writeFile).toHaveBeenCalled();
});

// vi.mock works with built-in and 3rd party modules, but also with your own modules.
// vi.mock('fs'): this will find the module and replace all functions there with empty spy functions.
// vi.mock mocks the module in such a way that it affects all other tests as well, but vitest sorts the tests out so that the files without the mock are run first. Therefore, it's a good idea to write the mock in all files that we want to use it in.
