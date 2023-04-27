import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../../App";
import UserForm from "../UserForm";

test("should display two inputs and one button", () => {
  render(<App />);

  const inputs = screen.getAllByRole("textbox");
  const button = screen.getByRole("button");
  expect(inputs).toHaveLength(2);
  expect(button).toBeInTheDocument();
});

it("should call onAddUser when form is submitted", async () => {
  const mockOnAddUser = jest.fn(() => {});
  render(<UserForm onAddUser={mockOnAddUser} />);

  const [nameInput, emailInput] = screen.getAllByRole("textbox");
  await userEvent.click(nameInput);
  await userEvent.keyboard("John");
  await userEvent.click(emailInput);
  await userEvent.keyboard("john@gmail.com");
  const submitButton = screen.getByRole("button", { name: /submit/i });
  await userEvent.click(submitButton);

  expect(mockOnAddUser).toHaveBeenCalled();
});
