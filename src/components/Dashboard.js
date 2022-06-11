import React, { useState, useEffect } from "react";
import { Loader } from "../components";
import { useSelector, useDispatch } from "react-redux";
import {
  getRandomUsers,
  pageUp,
  pageDown,
  reset,
} from "../redux/features/usersSlice";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { useNavigate } from "react-router";

const Dashboard = () => {
  const { users, page } = useSelector((state) => state.users);
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getRandomUsers(page));
    navigate(`/dashboard?page=${page}`);

    return () => dispatch(reset());
  }, [dispatch, page, navigate]);

  return (
    <div className="min-h-screen dark:bg-main-dark-bg dark:text-white">
      <h1 className="text-2xl font-extrabold text-center pt-4">
        Search by Name
      </h1>
      <div className="p-4 flex justify-center items-center w-96 mx-auto">
        <input
          type="text"
          id="search"
          className="h-8 shadow appearance-none border rounded w-full text-gray-700 mb-2 leading-tight focus:outline-none pl-2"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      {/* User Cards */}
      <div className="w-full flex flex-col justify-center items-center">
        <div className="border-b p-4 w-full sm:w-96 text-center transition-all duration-300 ease-linear">
          {users
            ?.filter((user) => {
              return (
                user?.name?.first
                  .toLowerCase()
                  .indexOf(searchTerm.toLowerCase()) !== -1 ||
                user?.name?.last
                  .toLowerCase()
                  .indexOf(searchTerm.toLowerCase()) !== -1 ||
                `${user?.name?.first} ${user?.name?.last}`
                  .toLowerCase()
                  .indexOf(searchTerm.toLowerCase()) !== -1
              );
            })
            ?.map((user, i) => (
              <div
                key={i}
                className={`${
                  i % 2 === 0 || i === 0
                    ? "bg-gray-100 dark:bg-secondary-dark-bg"
                    : ""
                } transition-all duration-300 ease-in-out hover:bg-gray-400 cursor-pointer dark:bg-main-dark-bg dark:hover:bg-gray-500 p-2 rounded-md`}
              >
                {user?.name?.first} {user?.name?.last}
              </div>
            ))}
        </div>

        <div className="flex w-48 justify-evenly items-center mt-4">
          <AiOutlineArrowLeft
            size={45}
            onClick={() => dispatch(pageDown())}
            className="cursor-pointer"
          />
          <p>{page}</p>
          <AiOutlineArrowRight
            size={45}
            onClick={() => dispatch(pageUp())}
            className="cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
