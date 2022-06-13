import React, { useState, useEffect } from "react";
import { UserCard } from "../components";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getRandomUsers, reset } from "../redux/features/usersSlice";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { useNavigate } from "react-router";

const Dashboard = () => {
  const { users } = useSelector((state) => state.users);
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
  }, [dispatch, navigate]);

  const handlePaginateLeft = () => {
    if (localPage === 1) return;
    if (start > 0 && end > 10 && localPage > 1) {
      setStart((prev) => prev - 10);
      setEnd((prev) => prev - 10);
      setLocalPage((prev) => prev - 1);
    } else {
      setLocalPage(1);
      navigate(`/dashboard`);
    }
    navigate(`/dashboard?page=${localPage - 1}`);
  };
  const handlePaginateRight = () => {
    if (localPage === 10) return;
    if (start < 90 && end < 100 && localPage < 10) {
      setStart((prev) => prev + 10);
      setEnd((prev) => prev + 10);
      setLocalPage((prev) => prev + 1);
    } else {
      setLocalPage(10);
      navigate(`/dashboard`);
    }
    navigate(`/dashboard?page=${localPage + 1}`);
  };

  return (
    <div className="grid place-items-center dark:bg-main-dark-bg dark:text-white">
      <div className="pt-4 w-full sm:w-1/4 flex justify-center items-center flex-col">
        <label
          htmlFor="searchTerm"
          className="text-gray-800 text-center block dark:text-white mb-4"
        >
          Search
        </label>
        <input
          type="text"
          id="search"
          className="h-8 shadow appearance-none border rounded w-64 text-gray-700 mb-2 leading-tight focus:outline-none pl-2"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        {!searchTerm.length > 0 && (
          <div className="flex w-48 justify-evenly items-center my-4">
            <AiOutlineArrowLeft
              size={25}
              onClick={handlePaginateLeft}
              className="cursor-pointer"
            />
            <p>{localPage}</p>
            <AiOutlineArrowRight
              size={25}
              onClick={handlePaginateRight}
              className="cursor-pointer"
            />
          </div>
        )}
      </div>
      <div className="grid gap-4 p-4 max-w-5xl xs:grid-cols-2 md:grid-cols-4 dark:bg-main-dark-bg dark:text-white">
        <h1 className="text-4xl font-extrabold xs:col-span-2 bg-yellow-200 dark:text-black xs:grid xs:grid-cols-2 pl-6 py-6 rounded-md">
          <span className="animate-slideup">
            Check out some of these cool users!!
          </span>
        </h1>
        {searchTerm.length > 0
          ? filteredUsers?.map((user, i) => (
              <Link to={`/dashboard/users/${user?.login?.uuid}`} key={i}>
                <UserCard key={i} user={user} />
              </Link>
            ))
          : users?.slice(start, end)?.map((user, i) => {
              return (
                <Link to={`/dashboard/users/${user?.login?.uuid}`} key={i}>
                  <UserCard key={i} user={user} />
                </Link>
              );
            })}
      </div>
    </div>
  );
};

export default Dashboard;
