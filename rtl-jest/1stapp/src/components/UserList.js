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
      <tbody>{renderedUsers}</tbody>
    </table>
  );
};

export default UserList;
