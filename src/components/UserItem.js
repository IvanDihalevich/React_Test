import React from "react";

const UserItem = ({ user, handleDelete }) => (
  <li className="user-item">
    <img
      src={user.avatar}
      alt={`${user.first_name} ${user.last_name}`}
      className="user-avatar"
    />
    <span className="user-name">
      {user.first_name} {user.last_name}
    </span>
    <button className="delete-btn" onClick={() => handleDelete(user.id)}>
      Delete
    </button>
  </li>
);

export default UserItem;
