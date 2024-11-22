export const filterUsers = (users, filter) => {
  return users.filter((user) =>
    `${user.first_name} ${user.last_name}`
      .toLowerCase()
      .includes(filter.toLowerCase())
  );
};
