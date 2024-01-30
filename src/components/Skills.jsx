import React from "react";
import HTML from "../assests/html.png";
import JavaScript from "../assests/javascript.png";
import TailwindCSS from "../assests/tailwind.png";
import ReactImg from "../assests/react.png";
import Github from "../assests/github.png";
import Node from "../assests/node.png";
import MongoDB from "../assests/mongo.png";
import Express from "../assests/express.png";
import Docker from "../assests/docker.png";
import Maven from "../assests/maven.png";
import Jenkins from "../assests/jenkins.png";
import "../index.css";
import background from "../assests/background.png";

const Skills = () => {
  return (
    // Main Screen
    <div
      name="Skills"
      className="w-full h-screen text-gray-300 bg-cover flex flex-auto"
      style={{ backgroundImage: `url(${background})` }}
    >
      {/* Main Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-purple-300">
            Skills
          </p>
          <p className="py-4">
            ..These are few Technologies I have worked with.
          </p>
        </div>

        {/* Image Container */}
        <div className="w-full grid  grid-cols-2  sm:grid-cols-4  gap-4  text-center py-8 flex-col ">
          
          {/* HTML-icon */}
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 ">
            <img className="w-20 mx-auto" src={HTML} alt="HTML icon" ></img>
            <p className="my-4">HTML</p>
          </div>

          {/* JavaScript-icon */}
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto"
              src={JavaScript}
              alt="JavaScript icon"
            ></img>
            <p className="my-4">JavaScript</p>
          </div>

          
          {/* MongoDB-icon */}
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={MongoDB} alt="MongoDB icon"></img>
            <p className="my-4">MongoDB</p>
          </div>


          {/* Express-icon */}
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Express} alt="Express icon"></img>
            <p className="my-4">Express</p>
          </div>

          {/* React-icon */}
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={ReactImg} alt="React icon"></img>
            <p className="my-4">React</p>
          </div>

          {/* Node-icon */}
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Node} alt="Node icon"></img>
            <p className="my-4">Node</p>
          </div>


          {/* Github-icon */}
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Github} alt="Github icon"></img>
            <p className="my-4">Github</p>
          </div>

          {/* Maven-icon */}
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 ">
            <img
              className="w-20 mx-auto"
              src={Maven}
              alt="Maven icon"
            ></img>
            <p className="my-4">Maven</p>
          </div>

          {/* Jenkins-icon */}
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 ">
            <img
              className="w-20 mx-auto"
              src={Jenkins}
              alt="Jenkins icon"
            ></img>
            <p className="my-4">Jenkins</p>
          </div>

          {/*Docker-icon */}
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 ">
            <img
              className="w-20 mx-auto"
              src={Docker}
              alt="Docker icon"
            ></img>
            <p className="my-4">Docker</p>
          </div>

          {/* TailwindCSS-icon */}
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 ">
            <img
              className="w-20 mx-auto"
              src={TailwindCSS}
              alt="TailwindCSS icon"
            ></img>
            <p className="my-4">TailwindCSS</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
