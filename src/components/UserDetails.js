import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getRandomUsers, reset } from "../redux/features/usersSlice";
import { useParams, useNavigate } from "react-router";

const UserDetails = () => {
  const { id } = useParams();
  const { users } = useSelector((state) => state.users);
  const user = users.find((user) => user?.login?.uuid === id);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRandomUsers());

    return () => dispatch(reset());
  }, [dispatch]);
  return (
    <div className="w-full flex justify-center items-center mt-6 dark:text-white">
      <div className="p-6 flex flex-col sm:flex-row items-center justify-center animate-slideup bg-gray-100 dark:bg-secondary-dark-bg shadow-lg rounded-lg sm:justify-between">
        <div className="overflow-hidden h-64 w-64 mb-4 sm:mb-0 shadow-lg sm:mr-6 rounded-md">
          <img
            src={user?.picture?.large}
            alt="user"
            className="h-64 w-64 transition-all transform duration-1000 hover:scale-125 ease-in-out"
          />
        </div>

        <div>
          <p>
            <span className="text-gray-600 dark:text-gray-300">Name : </span>
            {user?.name?.first} {user?.name?.last} ({user?.dob?.age}) (
            {user?.gender})
          </p>
          <p>
            <span className="text-gray-600 dark:text-gray-300">Phone : </span>
            {user?.cell}
          </p>
          <p>
            <span className="text-gray-600 dark:text-gray-300">Email : </span>
            {user?.email}
          </p>
          <p>
            <span className="text-gray-600 dark:text-gray-300">
              Location :{" "}
            </span>
            {user?.location?.city}, {user?.location?.state} {user?.nat}
          </p>
          <p>
            <span className="text-gray-600 dark:text-gray-300">
              Location(cont) :{" "}
            </span>
            {user?.location?.street?.name}, {user?.location?.street?.number}
          </p>
          <button
            className="p-3 bg-yellow-200 rounded-md my-2 dark:text-black transtion-all duration-200 opacity-90 hover:opacity-100 hover:scale-95"
            type="button"
            onClick={() => navigate("/dashboard")}
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
