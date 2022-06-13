import React from "react";

const Contact = () => {
  return (
    <div className="h-screen flex w-fill justify-center items-center dark:text-white flex-col">
      <h1 className="text-4xl font-extrabold mb-2 animate-slideup">
        Contact Me
      </h1>
      <h3 className="text-2xl font-extrabold animate-slideup mb-4">
        (951)227-3742
      </h3>
      <a href="mailto:kristianf451@gmail.com" target="_blank" rel="noreferrer">
        Email
      </a>
      <a
        href="https://www.linkedin.com/in/kristianfulkerson/"
        target="_blank"
        rel="noreferrer"
      >
        Linked In
      </a>
      <a href="https://github.com/krisf451" target="_blank" rel="noreferrer">
        Github
      </a>
      <a
        href="https://ksf-portfolio.vercel.app/"
        target="_blank"
        rel="noreferrer"
      >
        Portfolio
      </a>
    </div>
  );
};

export default Contact;
