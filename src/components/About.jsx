import React from "react";
import background from "../assests/background.png";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen text-gray-300 bg-cover"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4 px-4">
            <p className="text-4xl font-bold inline border-b-4 border-purple-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4 pl-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hi, I'm Sumia, nice to meet you . Please take a look around</p>
          </div>
          <div>
            <p>
              I have been actively engaged in learning and mastering new
              technologies, specifically focusing on the MERN (MongoDB,
              Express.js, React, Node.js) stack for web development. This
              decision stems from my commitment to delivering the highest
              quality work and staying current with industry best practices.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
