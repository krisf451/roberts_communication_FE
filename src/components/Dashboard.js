import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getRandomUsers, reset } from "../redux/features/usersSlice";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { useNavigate } from "react-router";

const Dashboard = () => {
  const { users, page } = useSelector((state) => state.users);
  const [searchTerm, setSearchTerm] = useState("");
  const [localPage, setLocalPage] = useState(1);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(10);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const filteredUsers = users.filter((user) => {
    return (
      user?.name?.first.toLowerCase().indexOf(searchTerm.toLowerCase()) !==
        -1 ||
      user?.name?.last.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1 ||
      `${user?.name?.first} ${user?.name?.last}`
        .toLowerCase()
        .indexOf(searchTerm.toLowerCase()) !== -1
    );
  });

  useEffect(() => {
    dispatch(getRandomUsers());
    navigate("/dashboard");

    return () => dispatch(reset());
  }, [dispatch, page]);

  const handlePaginateLeft = () => {
    if (localPage === 1) return;
    if (start > 0 && end > 10) {
      setStart((prev) => prev - 10);
      setEnd((prev) => prev - 10);
    }
    if (localPage > 1) {
      setLocalPage((prev) => prev - 1);
      navigate(`/dashboard?page=${localPage - 1}`);
    } else {
      setLocalPage(1);
      navigate(`/dashboard`);
    }
  };
  const handlePaginateRight = () => {
    if (localPage === 10) return;
    if (start < 90 && end < 100) {
      setStart((prev) => prev + 10);
      setEnd((prev) => prev + 10);
    }
    if (localPage < 10) {
      setLocalPage((prev) => prev + 1);
      navigate(`/dashboard?page=${localPage + 1}`);
    } else {
      setLocalPage(10);
      navigate(`/dashboard`);
    }
  };

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
        <div className="border-b p-4 w-full sm:w-96 text-center transition-all duration-200 ease-linear">
          {searchTerm.length > 0
            ? filteredUsers?.map((user, i) => (
                <Link to={`/dashboard/users/${user?.login?.uuid}`} key={i}>
                  <div
                    key={i}
                    className={`${
                      i % 2 === 0 || i === 0
                        ? "bg-gray-200 dark:bg-secondary-dark-bg"
                        : ""
                    } transition-all duration-200 ease-in-out hover:bg-gray-400 cursor-pointer dark:bg-main-dark-bg dark:hover:bg-gray-500 p-2 rounded-md`}
                  >
                    {user?.name?.first} {user?.name?.last}
                  </div>
                </Link>
              ))
            : users.slice(start, end)?.map((user, i) => (
                <Link to={`/dashboard/users/${user?.login?.uuid}`} key={i}>
                  <div
                    className={`${
                      i % 2 === 0 || i === 0
                        ? "bg-gray-200 dark:bg-secondary-dark-bg"
                        : ""
                    } transition-all duration-200 ease-in-out hover:bg-gray-400 cursor-pointer dark:bg-main-dark-bg dark:hover:bg-gray-500 p-2 rounded-md`}
                  >
                    {user?.name?.first} {user?.name?.last}
                  </div>
                </Link>
              ))}
        </div>

        <div className="flex w-48 justify-evenly items-center mt-4">
          <AiOutlineArrowLeft
            size={45}
            onClick={handlePaginateLeft}
            className="cursor-pointer"
          />
          <p>{localPage}</p>
          <AiOutlineArrowRight
            size={45}
            onClick={handlePaginateRight}
            className="cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
