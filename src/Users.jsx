import { useState } from "react";

function Users() {
  const mockData = [
    { username: "Ola Normann", email: "ola.normann@norge.no" },
    { username: "Torleif", email: "torleif@kodehode.no" },
    { username: "Jan Egil", email: "jan.egil@kodehode.no" },
    { username: "Sander", email: "sander@kodehode.no" },
  ];
  const [data, setData] = useState(mockData);
  const newUser = { username: "", email: "" };
  console.log(data);
  return (
    <>
      <h1>Users</h1>
      <ul>
        {data.map((user, index) => (
          <li key={index}>
            {user.username} | {user.email}
          </li>
        ))}
      </ul>
      <label htmlFor="username">Username: </label>
      <input
        type="text"
        name="username"
        id="usernameInput"
        onChange={(e) => (newUser.username = e.target.value)}
      />
      <label htmlFor="email">Email: </label>
      <input
        type="text"
        name="email"
        id="emailInput"
        onChange={(e) => (newUser.email = e.target.value)}
      />
      <button
        onClick={() => {
          setData([...data, newUser]);
          document.getElementById("usernameInput").value = "";
          document.getElementById("emailInput").value = "";
        }}
      >
        Add user
      </button>
    </>
  );
}
export default Users;
