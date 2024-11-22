import { useState } from "react";
import { getUsers, deleteUser } from "../apiMethods";
import { filterUsers } from "../utils/filterUsers";

export const useUsers = () => {
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState("");

  const fetchUsers = async () => {
    const usersFromApi = await getUsers();
    setUsers(usersFromApi);
  };

  const handleDelete = async (id) => {
    await deleteUser(id);
    setUsers(users.filter((user) => user.id !== id));
  };

  const filteredUsers = filterUsers(users, filter);

  return {
    users: filteredUsers,
    filter,
    setFilter,
    fetchUsers,
    handleDelete,
  };
};
