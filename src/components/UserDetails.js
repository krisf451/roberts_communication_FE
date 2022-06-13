import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getRandomUsers, reset } from "../redux/features/usersSlice";
import { useParams, useNavigate } from "react-router";
import moment from "moment";

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

  const getTimeUntilUsersBirthday = () => {
    let userBirthday = new Date(user?.dob?.date);
    let myBirthday, today, bday, diff;
    let userDay = userBirthday.getDate();
    let userMonth = userBirthday.getMonth() + 1;
    myBirthday = [userDay, userMonth];
    today = new Date();
    bday = new Date(today.getFullYear(), myBirthday[1] - 1, myBirthday[0]);
    if (today.getTime() > bday.getTime()) {
      bday.setFullYear(bday.getFullYear() + 1);
    }
    diff = bday.getTime() - today.getTime();
    let daysUntilNextBirthday = Math.ceil(diff / (1000 * 60 * 60 * 24));
    return daysUntilNextBirthday;
  };

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
            <span className="text-gray-600 dark:text-gray-300">
              Birthday :{" "}
            </span>
            {moment(user?.dob?.date).format("MMM Do YYYY")}
          </p>
          <p>
            <span className="text-gray-600 dark:text-gray-300">
              Next Birthday :{" "}
            </span>
            {getTimeUntilUsersBirthday()} days
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
          <div className="flex gap-4">
            <button
              className="p-3 bg-yellow-200 rounded-md my-2 dark:text-black transtion-all duration-200 opacity-90 hover:opacity-100 hover:scale-95"
              type="button"
              onClick={() => navigate("/dashboard")}
            >
              Back
            </button>
            <button
              className="p-3 bg-blue-200 rounded-md my-2 dark:text-black transtion-all duration-200 opacity-90 hover:opacity-100 hover:scale-95"
              type="button"
            >
              <a
                href={`mailto:${user?.email}`}
                target="_blank"
                rel="noreferrer"
              >
                Contact
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
