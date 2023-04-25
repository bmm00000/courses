import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../../App";

test("should display two inputs and one button", () => {
  render(<App />);

  const inputs = screen.getAllByRole("textbox");
  const button = screen.getByRole("button");
  expect(inputs).toHaveLength(2);
  expect(button).toBeInTheDocument();
});
