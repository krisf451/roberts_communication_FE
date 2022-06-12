import React from "react";
import { ThreeDots } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="flex h-screen justify-center items-center bg-main-bg dark:bg-main-dark-bg">
      <ThreeDots color="blue" height={20} width={20} />
    </div>
  );
};

export default Loader;
