import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { getUsers } from "./api";

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const { data } = await getUsers();
      setUsers(data?.results);
    };
    fetchUsers();
  }, []);

  return (
    <div className="App">
      <h1 className="text-2xl text-green-500 underline">Tailwind Test</h1>
    </div>
  );
};

export default App;
