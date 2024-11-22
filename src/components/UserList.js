import React from "react";
import UserItem from "./UserItem";

const UserList = ({ users, handleDelete }) => (
  <ul className="user-list">
    {users.map((user) => (
      <UserItem key={user.id} user={user} handleDelete={handleDelete} />
    ))}
  </ul>
);

export default UserList;
