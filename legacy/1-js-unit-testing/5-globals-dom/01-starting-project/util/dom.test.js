import path from "path";
import fs from "fs";

import { it, expect, vi, beforeEach } from "vitest";
import { Window } from "happy-dom";

import { showError } from "./dom";

const window = new Window();
const document = window.document;
vi.stubGlobal("document", document);

const htmlDocumentPath = path.join(process.cwd(), "index.html");
const htmlDocumentContent = fs.readFileSync(htmlDocumentPath).toString();

beforeEach(() => {
  document.body.innerHTML = "";
  document.write(htmlDocumentContent);
});
// we need to clean up the document with every test, since the document is an object (reference type).

it("shows error message in paragraph", () => {
  showError("error message");

  const errorElement = document.getElementById("errors");
  const errorParagraph = errorElement.firstChild;
  // we can use the document methods here in the testing code, as well as in the other code used by the testing code.

  expect(errorParagraph).not.toBeNull();
});

it("does not show error message in paragraph at the beginning", () => {
  const errorElement = document.getElementById("errors");
  const errorParagraph = errorElement.firstChild;

  expect(errorParagraph).toBeNull();
});

it("shows the output provided as error message in the error paragraph", () => {
  const errorMessage = "error message";
  showError(errorMessage);

  const errorElement = document.getElementById("errors");
  const errorParagraph = errorElement.firstChild;

  expect(errorParagraph.textContent).toBe(errorMessage);
});
