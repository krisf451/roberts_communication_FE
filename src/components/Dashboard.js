import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getRandomUsers, pageUp, pageDown } from "../redux/features/usersSlice";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { useNavigate } from "react-router";

const Dashboard = () => {
  const { users, isLoading, isError, isSuccess, message, page } = useSelector(
    (state) => state.users
  );
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getRandomUsers(page));
    navigate(`/dashboard?page=${page}`);
  }, [dispatch, page, navigate]);

  return (
    <div className="min-h-screen dark:bg-main-dark-bg dark:text-white">
      <div className="p-4 flex justify-center items-center w-96 mx-auto">
        <label htmlFor="search" className="mr-2 block">
          Search
        </label>
        <input
          type="text"
          id="search"
          className="h-8 shadow appearance-none border rounded w-full text-gray-700 mb-2 leading-tight focus:outline-none pl-2"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="w-full flex flex-col justify-center items-center">
        <div className="border-b p-4">
          {users
            ?.filter((user) => {
              return (
                user?.name?.first
                  .toLowerCase()
                  .indexOf(searchTerm.toLowerCase()) !== -1 ||
                user?.name?.last
                  .toLowerCase()
                  .indexOf(searchTerm.toLowerCase()) !== -1
              );
            })
            ?.map((user, i) => (
              <div key={i}>
                {user?.name?.first} {user?.name?.last}
              </div>
            ))}
        </div>

        <div className="flex w-32 justify-between items-center mt-4">
          <AiOutlineArrowLeft onClick={() => dispatch(pageDown())} />
          <p>{page}</p>
          <AiOutlineArrowRight onClick={() => dispatch(pageUp())} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
