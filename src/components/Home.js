import React from "react";
import horsevideo from "../assets/horse-race.mp4";

const Home = () => {
  return (
    <div className="dark:bg-main-dark-bg dark:text-white h-screen">
      <div className="absolute mt-[64px] top-0 left-0 w-full h-full bg-[#000000cc]"></div>
      <video muted loop autoPlay src={horsevideo} />
      <div className="absolute top-0 text-white w-full h-full flex flex-col justify-center items-center">
        <h1 className="text-4xl font-extrabold mb-4 animate-slideup">
          Welcome
        </h1>
        <p className="text-sm leading-10 w-[300px] h-[300px] text-center overflow-scroll scrollbar-hide">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam in
          dolor qui natus eos. Eius adipisci repellendus facere labore esse, est
          recusandae non architecto ex tempora omnis, sint minus. Molestias.
          Earum voluptate minima accusantium praesentium id atque culpa tempora
          natus animi iusto, fugiat voluptas commodi ea delectus obcaecati
          libero non doloribus nihil. Suscipit, veritatis quis! Ipsum voluptatum
          repellat debitis hic dolor qui natus eos. Eius adipisci repellendus
          facere labore esse, est recusandae non architecto ex tempora omnis,
          sint minus. Molestias. Earum voluptate minima accusantium praesentium
          id atque culpa tempora natus animi iusto, fugiat voluptas commodi ea
          delectus obcaecati libero non doloribus nihil. Suscipit, veritatis
          quis! Ipsum voluptatum repellat debitis hic dolor qui natus eos. Eius
          adipisci repellendus facere labore esse, est recusandae non architecto
          ex tempora omnis, sint minus. Molestias. Earum voluptate minima
          accusantium praesentium id atque culpa tempora natus animi iusto,
          fugiat voluptas commodi ea delectus obcaecati libero non doloribus
          nihil. Suscipit, veritatis quis! Ipsum voluptatum repellat debitis hic
          dolor qui natus eos. Eius adipisci repellendus facere labore esse, est
          recusandae non architecto ex tempora omnis, sint minus. Molestias.
          Earum voluptate minima accusantium praesentium id atque culpa tempora
          natus animi iusto, fugiat voluptas commodi ea delectus obcaecati
          libero non doloribus nihil. Suscipit, veritatis quis! Ipsum voluptatum
          repellat debitis hic
        </p>
      </div>
    </div>
  );
};

export default Home;
