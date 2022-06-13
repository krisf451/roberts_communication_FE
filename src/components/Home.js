import React from "react";
import peopleWalking from "../assets/people-walking.mp4";

const Home = () => {
  return (
    <div className="dark:bg-main-dark-bg dark:text-white h-screen">
      <div className="absolute mt-[64px] top-0 left-0 w-full h-full bg-[#000000cc]"></div>
      <video muted loop autoPlay src={peopleWalking} />
      <div className="absolute top-0 text-white w-full h-full flex flex-col justify-center items-center">
        <h1 className="text-4xl font-extrabold mb-4 animate-slideup">
          Welcome!
        </h1>
        <p className="text-sm leading-10 w-[300px] text-center animate-slideleft mb-10">
          This is a custom app build as a coding challenge for Robert
          Communications Network, I enjoyed working through all of the
          challenges
        </p>
        <h2 className="text-3xl font-extrabold mb-4 animate-slidedown">
          Random<span className="text-gray-400"> User </span>Stories
        </h2>
        <p className="text-sm leading-10 w-[300px] h-[300px] text-center animate-slideright overflow-scroll scrollbar-hide">
          As a user of this application, I would like to navigate to the
          dashboard and quickly filter for any person in the system and have the
          option to see a more detailed view of that person. As a user of this
          application, I would like to be able to paginate through all 100 users
          and see a new set of 10 users each time I paginate. As a user of this
          application I would like to switch between light and dark mode quickly
          and easily.
        </p>
      </div>
    </div>
  );
};

export default Home;
