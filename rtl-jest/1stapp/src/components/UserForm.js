import { useState } from "react";

const UserForm = ({ onAddUser }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleAddUser = (event) => {
    event.preventDefault();

    onAddUser({ name, email });
    setName("");
    setEmail("");
  };

  return (
    <>
      <h1>Users form</h1>
      <form onSubmit={handleAddUser}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <button>Submit</button>
      </form>
    </>
  );
};

export default UserForm;
