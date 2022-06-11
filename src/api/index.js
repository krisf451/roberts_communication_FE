import axios from "axios";

const API = axios.create({
  baseURL: "https://randomuser.me/api",
});

export const getUsers = (page) =>
  API.get(`/?page=${page}&results=10&seed=abc123`);
