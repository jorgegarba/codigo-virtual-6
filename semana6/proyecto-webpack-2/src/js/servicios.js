import axios from "axios"
export const getUsers = async () => {
  const data = await axios.get("https://reqres.in/api/users");
  return data.data;
}
export const getPosts = async () => {
  const data = await axios.get("https://jsonplaceholder.typicode.com/posts");
  return data.data;
}