import React from "react";
import ReactDOM from "react-dom";
import UserList from "./components/UserList";
import FilterInput from "./components/FilterInput";
import LoadUsersButton from "./components/LoadUsersButton";
import { useUsers } from "./hooks/useUsers";
import "./styles.css";

function App() {
  const { users, filter, setFilter, fetchUsers, handleDelete } = useUsers();

  return (
    <div className="App">
      <h2>User Management</h2>
      <LoadUsersButton onClick={fetchUsers} />
      <FilterInput filter={filter} setFilter={setFilter} />
      <UserList users={users} handleDelete={handleDelete} />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
