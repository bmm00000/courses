import { useState } from "react";

import UserForm from "./components/UserForm";
import UserList from "./components/UserList";

function App() {
  const [users, setUsers] = useState([]);

  const onAddUser = (user) => {
    setUsers([...users, user]);
  };

  return (
    <>
      <UserForm onAddUser={onAddUser} />
      <br />
      <UserList users={users} />
    </>
  );
}

export default App;