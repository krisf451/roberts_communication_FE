import axios from "axios";

const API = axios.create({
  baseURL: "https://randomuser.me/api/?results=100",
});

export const getUsers = () => API.get();
