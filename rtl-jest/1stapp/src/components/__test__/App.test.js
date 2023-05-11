import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../../App";

test("renders name and email after submit", async () => {
  render(<App />);

  const nameInput = screen.getByRole("textbox", { name: "Name:" });
  const emailInput = screen.getByRole("textbox", { name: "Email:" });
  const submitButton = screen.getByRole("button");

  await userEvent.click(nameInput);
  await userEvent.keyboard("Jane");
  await userEvent.click(emailInput);
  await userEvent.keyboard("jane@gmail.com");
  await userEvent.click(submitButton);

  expect(screen.getByRole("cell", { name: "Jane" })).toBeInTheDocument();
  expect(
    screen.getByRole("cell", { name: "jane@gmail.com" })
  ).toBeInTheDocument();
});
