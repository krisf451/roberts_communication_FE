import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getRandomUsers, pageUp, pageDown } from "../redux/features/usersSlice";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const Dashboard = () => {
  const { users, isLoading, isError, isSuccess, message, page } = useSelector(
    (state) => state.users
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRandomUsers(page));
  }, [dispatch, page]);

  return (
    <div className="h-screen dark:bg-main-dark-bg dark:text-white">
      {users?.map((user, i) => (
        <div key={i}>
          {user?.name?.first} {user?.name?.last}
        </div>
      ))}
      <div className="flex w-32 justify-between">
        <AiOutlineArrowLeft onClick={() => dispatch(pageDown())} />
        <AiOutlineArrowRight onClick={() => dispatch(pageUp())} />
      </div>
    </div>
  );
};

export default Dashboard;
