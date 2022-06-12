import React from "react";

const About = () => {
  return (
    <div className="h-screen flex w-fill justify-center items-center dark:text-white flex-col">
      <h1 className="text-4xl font-extrabolda mb-5 animate-slideup">
        About Me
      </h1>
      <div className="w-[400px] h-[400px] overflow-scroll scrollbar-hide text-center">
        Hello! I'm Kristian. A Full Stack Web Developer with a passion for
        problem-solving. 👋 Nice to meet you! Currently, I am proficient with
        HTML5, JavaScript, CSS3, React.js, Redux, and many more
        frameworks/libraries. I regularly use Git, GitHub, Slack, and Zoom in an
        Agile work environment. I also have experience configuring databases
        using either PostgreSQL or MongoDB, and creating RESTful APIs for them
        using Node.js and Express.js. I have a high level of patience, a
        competitive mindset, and an open mind toward constructive feedback. I
        had a great time working on this project and learned a lot in the
        process. Hopefully we have a chance to work together soon!
      </div>
    </div>
  );
};

export default About;
