import { it, expect } from "vitest";
import { add } from "./math";

// One way to test for errors:
it("should throw an error if no value is passed", () => {
  try {
    add();
  } catch (err) {
    expect(err).toBeDefined();
  }
});

// Another way to test for errors:
it("should throw an error if no value is passed", () => {
  const addFn = () => {
    add();
  };

  expect(addFn).toThrow();
});

// You can expect that an error with a specific error message is thrown:
// expect(addFn).toThrow(/is not iterable/i)
