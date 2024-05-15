import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div>
      <h1>Users List</h1>
      {users.map((user) => (
        <div key={user.id} className="user-card">
          <Link to={`/users/${user.id}`}>
            <h3>{user.name}</h3>
            <p>{user.email}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default UserList;
