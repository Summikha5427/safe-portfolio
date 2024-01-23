import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import background from "../assests/background.png"

const Home = () => {
  return (
    <div name="home" className=" w-full h-screen bg-cover" style={{backgroundImage:`url(${background})`}}>
      {/* container */}
      <div className="max-w-[1000px] mx-auto  px-8 flex flex-col justify-center h-full">
        <p className="text-purple-300">Hi,my name is</p>

        <h1 className="text-4xl sm:text-6xl font-bold text-[white]">
          Sumia Khan
        </h1>

        <h2 className="text-4px sm:text-5xl font-bold text-[#cad3ef]">
          I'm a Full Stack Developer
        </h2>

        <p className="text-[#f8f8f9] py-4 max-w-700px ">
          I'm a full-stack developer specailizing in building (and occasionally
          designing) exceptional digital experiences. Currently, I am focused on
          building responsive full-stack web-applications
        </p>

        <div>
          <Link to='Work'>
            <button className="text-white group border-2 px-6 py-3 my-2 items-center flex hover:bg-purple-300 hover:border-purple-300">
              View Work
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
