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

  // the result of scren.degut is all the rendered component in html and print it in the terminal, so you can see what the current visible state of the component is (in this case, we can see that 'Jane' and 'jane@gmail.com' are present in the component, so now you can select them):
  // screen.debug()

  expect(screen.getByRole("cell", { name: "Jane" })).toBeInTheDocument();
  expect(
    screen.getByRole("cell", { name: "jane@gmail.com" })
  ).toBeInTheDocument();
});
