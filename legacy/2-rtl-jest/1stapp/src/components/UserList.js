const UserList = ({ users }) => {
  const renderedUsers = users.map((user) => (
    <tr key={user.name}>
      <td>{user.name}</td>
      <td>{user.email}</td>
    </tr>
  ));

  return (
    <table>
      <thead>
        <tr>
          <td>Name</td>
          <td>Email</td>
        </tr>
      </thead>
      {/* modifying your component for the purposes of testing is not the best idea, but you can do it as a last resource: */}
      <tbody data-testid="users">{renderedUsers}</tbody>
    </table>
  );
};

export default UserList;
