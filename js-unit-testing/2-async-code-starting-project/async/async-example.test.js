import { it, expect } from "vitest";
import { generateToken, generateTokenPromise } from "./async-example";

it("generates a token value", (done) => {
  const email = "email@email.com";

  //   we use try and catch because, if we use 'done', errors are not catched.

  generateToken(email, (err, token) => {
    try {
      //   expect(token).toBe(2);
      expect(token).toBeDefined();
      done();
    } catch (err) {
      done(err);
    }
  });
});

// we have two ways to test promises:

it("generates a token value", () => {
  const email = "email@email.com";

  return expect(generateTokenPromise(email)).resolves.toBeDefined();
});

it("generates a token value", async () => {
  const email = "email@email.com";

  const token = await generateTokenPromise(email);

  expect(token).toBeDefined();
});

// Returning Promises In Tests:
// Even though the test worked as expected in the previous lecture, you should actually return the promise assertion in your tests:

// it('should generate a token value', () => {
//   const testUserEmail = 'test@test.com';

//   return expect(generateTokenPromise(testUserEmail)).resolves.toBeDefined();
// });
// This guarantees that Vitest / Jest wait for the promise to be resolved.

// You don't need to return when using async / await (since a function annotated with async returns a promise implicitly).
