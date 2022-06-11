import React from "react";
import { Dashboard, UserDetails, Home } from "./components";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";

const App = () => {
  const { mode } = useSelector((state) => state.theme);

  return (
    <div className={`${mode === "Dark" ? "dark" : ""} min-h-screen w-full`}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/users/:id" element={<UserDetails />} />
      </Routes>
    </div>
  );
};

export default App;
