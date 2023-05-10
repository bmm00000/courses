import { render, screen } from "@testing-library/react";
import UserList from "../UserList";

test("renders one row per user", async () => {
  render(<UserList users={[{ name: "John", email: "john@gmail.com" }]} />);

  screen.logTestingPlaygroundURL();

  const rows = screen.getAllByRole("row");
  expect(rows).toHaveLength(2);
});

test("renders name and email of user in each row", async () => {
  render(<UserList users={[{ name: "John", email: "john@gmail.com" }]} />);

  const name = screen.queryByRole("cell", { name: "John" });
  const email = screen.queryByRole("cell", { name: "john@gmail.com" });
  expect(name).toBeInTheDocument();
  expect(email).toBeInTheDocument();
});
