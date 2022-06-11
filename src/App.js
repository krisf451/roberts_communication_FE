import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { getUsers } from "./api";
import { useSelector } from "react-redux";

const App = () => {
  const [users, setUsers] = useState([]);
  const { mode } = useSelector((state) => state.theme);

  useEffect(() => {
    const fetchUsers = async () => {
      const { data } = await getUsers();
      setUsers(data?.results);
    };
    fetchUsers();
  }, []);

  return (
    <div
      className={`${mode === "Dark" ? "dark" : ""} min-h-screen w-full`}
    ></div>
  );
};

export default App;
