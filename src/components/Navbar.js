import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleDarkMode } from "../redux/features/themeSlice";
import { HiOutlineLightBulb, HiMoon } from "react-icons/hi";
import {
  AiOutlineMenu,
  AiOutlineContacts,
  AiOutlineHome,
  AiOutlineInfoCircle,
  AiOutlineUser,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import { Menu } from "@headlessui/react";
import logo from "../assets/roberts-img.png";

const Navbar = () => {
  const { mode } = useSelector((state) => state.theme);
  const { page } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const handleToggle = () => {
    dispatch(toggleDarkMode());
  };
  return (
    <div className="bg-gray-200 dark:bg-secondary-dark-bg flex justify-between w-full h-[4rem] shadow-md items-center dark:text-white">
      {/* Left - Logo */}
      <div className="ml-5 text-2xl font-semibold uppercase">
        <Link to="/">
          <img src={logo} alt="logo" className="h-12 w-auto" />
        </Link>
      </div>

      {/* Links - Hidden on Mobile */}
      <div className="hidden md:flex flex-1 justify-around w-full text-sm ease-in-out text-gray-500  dark:text-white">
        <Link
          to={`/dashboard?page=${page}`}
          className="transition-color duration-300 hover:text-gray-800 dark:hover:text-gray-400"
        >
          DASHBOARD
        </Link>
        <Link
          to="/about"
          className="transition-color duration-300 hover:text-gray-800 dark:hover:text-gray-400"
        >
          ABOUT
        </Link>
        <Link
          to="/contact"
          className="transition-color duration-3000 hover:text-gray-800 dark:hover:text-gray-400"
        >
          CONTACT
        </Link>
      </div>

      {/* Right Side - Theme + Mobile Menu */}
      <div className="mr-5 flex items-center gap-4">
        <div onClick={handleToggle} className="cursor-pointer">
          {mode === "Dark" ? (
            <HiOutlineLightBulb size={35} />
          ) : (
            <HiMoon size={35} />
          )}
        </div>
        <Menu as="div" className="relative md:hidden flex items-center">
          <Menu.Button className="cursor-pointer transition-all transform hover:rotate-90 duration-500 ease-linear">
            <AiOutlineMenu size={25} />
          </Menu.Button>
          <Menu.Items className="origin-top-right absolute right-0 top-10 w-56 rounded-lg shadow-lg bg-main-bg dark:bg-main-dark-bg dark:text-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none">
            <div className="py-1">
              <Menu.Item>
                {({ active }) => (
                  <Link
                    to="/"
                    className={`rounded-lg flex items-center px-4 py-4 text-sm ${
                      active ? "bg-gray-200 dark:bg-secondary-dark-bg" : ""
                    }`}
                  >
                    <AiOutlineHome
                      className="mr-3 h-5 w-5"
                      aria-hidden="true"
                    />
                    Home
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link
                    to={`/dashboard?page=${page}`}
                    className={`rounded-lg flex items-center px-4 py-4 text-sm ${
                      active ? "bg-gray-200 dark:bg-secondary-dark-bg" : ""
                    }`}
                  >
                    <AiOutlineUser
                      className="mr-3 h-5 w-5"
                      aria-hidden="true"
                    />
                    Dashboard
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link
                    to="/about"
                    className={`rounded-lg flex items-center px-4 py-4 text-sm ${
                      active ? "bg-gray-200 dark:bg-secondary-dark-bg" : ""
                    }`}
                  >
                    <AiOutlineInfoCircle
                      className="mr-3 h-5 w-5"
                      aria-hidden="true"
                    />
                    About
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link
                    to="/contact"
                    className={`rounded-lg flex items-center px-4 py-4 text-sm ${
                      active ? "bg-gray-200  dark:bg-secondary-dark-bg" : ""
                    }`}
                  >
                    <AiOutlineContacts
                      className="mr-3 h-5 w-5"
                      aria-hidden="true"
                    />
                    Contact
                  </Link>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Menu>
      </div>
    </div>
  );
};

export default Navbar;
