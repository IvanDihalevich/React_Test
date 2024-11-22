import axios from "axios";

const baseUrl = "https://reqres.in/";

export const getUsers = () => {
  return axios
    .get(baseUrl + "api/users?page=1")
    .then(({ data }) => data.data)
    .catch((e) => console.error(e));
};

export const deleteUser = (id) => {
  return axios
    .delete(baseUrl + `api/users/${id}`)
    .then(() => id)
    .catch((e) => console.error(e));
};
