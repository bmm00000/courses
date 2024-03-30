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
  // this is a spy, not a mock!!
  const mockOnAddUser = jest.fn();

  //   const argsList = [];
  //   const mockOnAddUser = (...args) => {
  //     argsList.push(args);
  //   };

  render(<UserForm onAddUser={mockOnAddUser} />);

  const nameInput = screen.getByRole("textbox", { name: /name/i });
  const emailInput = screen.getByRole("textbox", { name: /email/i });

  await userEvent.click(nameInput);
  await userEvent.keyboard("John");
  await userEvent.click(emailInput);
  await userEvent.keyboard("john@gmail.com");
  const submitButton = screen.getByRole("button", { name: /submit/i });
  await userEvent.click(submitButton);

  //   expect(argsList).toHaveLength(1);
  //   expect(argsList[0][0]).toEqual({ name: "John", email: "john@gmail.com" });
  expect(mockOnAddUser).toHaveBeenCalledWith({
    name: "John",
    email: "john@gmail.com",
  });
});

test("cleans inputs after submit", async () => {
  render(<UserForm onAddUser={() => {}} />);

  const nameInput = screen.getByRole("textbox", { name: /name/i });
  const emailInput = screen.getByRole("textbox", { name: /email/i });

  await userEvent.click(nameInput);
  await userEvent.keyboard("John");
  await userEvent.click(emailInput);
  await userEvent.keyboard("john@gmail.com");
  const submitButton = screen.getByRole("button", { name: /submit/i });
  await userEvent.click(submitButton);

  expect(nameInput).toHaveValue("");
  expect(emailInput).toHaveValue("");
});

// we can also simulate pressing enter: userEvent.keyboard('{Enter}')
