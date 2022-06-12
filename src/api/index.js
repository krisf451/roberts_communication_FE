import axios from "axios";

const API = axios.create({
  baseURL: "https://randomuser.me/api",
});

export const getUsers = () => API.get(`/?results=100&seed=abc123`);
