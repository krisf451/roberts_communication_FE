import React from "react";

const UserCard = ({ user }) => {
  return (
    <div className="bg-gray-200 dark:bg-secondary-dark-bg h-auto square cursor-pointer rounded-md transition-all transform duration-300 md:hover:scale-105">
      <img
        src={user?.picture?.large}
        alt="user"
        className="w-full object-cover p-2"
      />
    </div>
  );
};

export default UserCard;
