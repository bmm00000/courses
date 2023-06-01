import { render, screen, within } from "@testing-library/react";
import UserList from "../UserList";

const renderComponent = () => {
  const users = [
    { name: "John", email: "john@gmail.com" },
    { name: "Pepe", email: "pepe@gmail.com" },
  ];
  render(<UserList users={users} />);

  return { users };
};
// react testing library gives the recommendation of not render your components inside of a beforeEach function.

test("renders one row per user", async () => {
  renderComponent();

  // when react testing library takes the component and renders it, the 'container' is the div that is rendered wrapping our whole component. This is an html element that has all the properties/methods that html elements have, for example, querySelector, etc.:
  //   const { container } = render(
  //     <UserList users={[{ name: "John", email: "john@gmail.com" }]} />
  //   );

  // to get help finding a particular element, use this helper function:
  //   screen.logTestingPlaygroundURL();
  // if it's difficult to select any html element in the testing playground, add some in-line styles to make it distinct, for example: style="border: 10px solid red; display: block"

  //   const rows = container.querySelectorAll("tbody tr");
  const rows = within(screen.getByTestId("users")).getAllByRole("row");
  expect(rows).toHaveLength(2);
});

test("renders name and email of user in each row", async () => {
  const { users } = renderComponent();
  //   const name = screen.queryByRole("cell", { name: "John" });
  //   const email = screen.queryByRole("cell", { name: "john@gmail.com" });
  //   expect(name).toBeInTheDocument();
  //   expect(email).toBeInTheDocument();

  //   const firstRow = within(screen.getByTestId("users")).getAllByRole("row")[0];
  //   const name = within(firstRow).getByRole("cell", { name: "John" });
  //   const email = within(firstRow).getByRole("cell", { name: "john@gmail.com" });
  //   expect(name).toBeInTheDocument();
  //   expect(email).toBeInTheDocument();

  for (let user of users) {
    expect(screen.getByRole("cell", { name: user.name })).toBeInTheDocument();
    expect(screen.getByRole("cell", { name: user.email })).toBeInTheDocument();
  }
});
