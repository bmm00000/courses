const sum = (a, b) => a + b;
const subtract = (a, b) => a - b;

test("sum adds up its values", () => {
  const result = sum(1, 2);
  const expected = 3;

  expect(result).toBe(expected);
});

test("subtract subtracts its values", () => {
  const result = subtract(7, 3);
  const expected = 4;

  expect(result).toBe(expected);
});

function expect(actual) {
  return {
    toBe(expect) {
      if (actual !== expect) {
        throw new Error(`We expect ${expect}, not ${actual}`);
      }
    },
    toEqual() {},
    toBeGreaterThan() {},
  };
}

function test(title, callback) {
  try {
    callback();
    console.log(`V - ${title}`);
  } catch (err) {
    console.log(`X - ${title}`);
    console.log(err);
  }
}
