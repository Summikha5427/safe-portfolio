import React from "react";
import ttt from "../assests/ttt.jpg";
import sql from "../assests/sql.jpg";
import devops from "../assests/devops.jpg";
import bookstore from "../assests/bookstore.jpg";
import logo from "../assests/Logo.png";
import enm from "../assests/enm.png";
import background from "../assests/background.png";

const Work = () => {
  return (
    // Screen Container
    <div
      name="Work"
      className="w-full md:h-screen text-gray-300 bg-cover"
      style={{ backgroundImage: `url(${background})` }}
    >
      {/* Work Container */}
      <div className="max-w-[1000px] mx-auto p-4  flex flex-col justify-center w-full h-full">
        {/* sub-Container */}
        <div className="">
          <p className="font-bold text-4xl inline border-b-4 border-purple-300">
            Work
          </p>
          <p className="py-2">These are Few of my works done.</p>
        </div>

        {/* Projects{grid}-Container */}
        <div className=" grid sm:grid-cols-2 md:grid-cols-3 gap-4 ">
          {/* CARD-item {projects-1} */}
          <div
            style={{ backgroundImage: `url(${ttt})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center text-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              {/* hoveritems _buttons -1*/}
              <div className="pt-4 text-center">
                <span className="text-2xl font-bold text-white tracking-wider">
                  Tic Tac Toe Game
                </span>
                <p>
                  <a href="https://sumiakhan.github.io/tic-tac-toe/">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Demo
                    </button>
                  </a>
                  <a href="https://github.com/Sumiakhan/tic-tac-toe">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Code
                    </button>
                  </a>
                </p>
                <p className="text-2xl font-bold text-white tracking-wider">
                  React Hooks Redux Code
                </p>
              </div>
            </div>
          </div>

          {/* CARD-item {project-2} */}
          <div
            style={{ backgroundImage: `url(${sql})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                SQL Project
              </span>
              {/* hoveritems _buttons -2*/}
              <div className="pt-2 text-center">
                <a href="https://github.com/Sumiakhan/sql-project/blob/main/SQL%20Query.sql">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* CARD-item {project-3} */}
          <div
            style={{ backgroundImage: `url(${bookstore})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100 pt-2 text-center">
              <span className="text-2xl font-bold text-white tracking-wider">
                BookStore - MERN Application
              </span>

              {/* hoveritems _buttons -3 */}
              <div className="pt-2 text-center">
                <p>
                  <a href="https://summikha5427.github.io/Allhamdulillah-/">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Demo
                    </button>
                  </a>
                  <a href="https://github.com/Sumiakhan/Projects/tree/cab95121f234a224172e6306f3f58123e63b8405/BookStore-MERN">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Code
                    </button>
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* CARD-item {project-4} */}
          <div
            style={{ backgroundImage: `url(${logo})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                FrontEnd Application
              </span>

              {/* hoveritems _buttons -4*/}
              <div className="pt-2 text-center">
                <a href="https://sumiakhan.github.io/portfolio/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/Sumiakhan/portfolio">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
                <p className="text-2xl font-bold text-white tracking-wider pt-2">
                  My Portfolio
                </p>
              </div>
            </div>
          </div>

          {/* CARD-item {project-5} */}
          <div
            style={{ backgroundImage: `url(${enm})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects -5 */}
            <div className="opacity-0 group-hover:opacity-100 pt-2 text-center">
              <p className="text-2xl font-bold text-white tracking-wider ">
                BackEnd-Application
              </p>

              {/* hoveritems _buttons */}
              <div className="pt-2 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Working on project
                  </button>
                </a>
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* CARD-item {project-6} */}
          <div
            style={{ backgroundImage: `url(${devops})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100 pt-2 text-center">
              <span className="text-2xl font-bold text-white tracking-wider">
                Devops Project
              </span>

              {/* hoveritems _buttons -6 */}
              <div className="pt-2 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Working on Devops
                  </button>
                </a>
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
