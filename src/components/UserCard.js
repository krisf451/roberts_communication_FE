import React from "react";

const UserCard = ({ user }) => {
  return (
    <figure className="bg-gray-200 dark:bg-secondary-dark-bg dark:text-white cursor-pointer rounded-md square transition-all transform duration-300 md:hover:scale-105 w-full">
      <div className="group flex flex-col relative rounded-md items-center justify-center">
        <div className="absolute opacity-0 bottom-0 left-0 p-2 z-10 group-hover:bg-white dark:group-hover:bg-secondary-dark-bg group-hover:opacity-80 w-full transition-all duration-300 ease-linear">
          <p className="ml-2">
            {user?.name?.first} {user?.name?.last}
          </p>
        </div>
        <img
          src={user?.picture?.large}
          alt="user"
          className="w-full object-contain p-2 opacity-90 hover:opacity-100 transition-all duration-200"
        />
      </div>
    </figure>
  );
};

export default UserCard;
