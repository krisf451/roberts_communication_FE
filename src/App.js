import React from "react";
import {
  Dashboard,
  UserDetails,
  Home,
  Navbar,
  About,
  Contact,
} from "./components";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { Toaster } from "react-hot-toast";

const App = () => {
  const { mode } = useSelector((state) => state.theme);

  return (
    <div className={`${mode === "Dark" ? "dark" : ""} min-h-screen w-full`}>
      <div className="bg-main-bg dark:bg-main-dark-bg min-h-screen w-full">
        <Toaster />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/users/:id" element={<UserDetails />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
