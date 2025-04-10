import axios from "axios";

const BASE_URL = "http://localhost:5000/api/users";

export const fetchUsers = async () => {
  const res = await axios.get(BASE_URL);
  return res.data;
};

export const addUser = async (user) => {
  const res = await axios.post(BASE_URL, user);
  return res.data;
};

export const deleteUser = async (id) => {
  await axios.delete(`${BASE_URL}/${id}`);
};
