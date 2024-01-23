import React, { useState } from "react";
import { FaTimes, FaBars, FaGithub, FaLinkedin } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import Logo from "../assests/Logo.png";
import { Link } from "react-scroll";
import navimg from "../assests/navbar-image.jpg";
import resume from "../assests/Resume.pdf";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div
      className="navbar-container fixed w-full h-[70px] flex justify-between items-center p-4 text-white font-semibold bg-purple-300  bg-cover"
      style={{ backgroundImage: `url(${navimg})` }}
    >
      <div>
        <Link to="home" smooth={true} duration={200}>
          <img src={Logo} alt="Logo" style={{ width: "60px" }}></img>
        </Link>
      </div>

      {/* menu  - in the "ul" we are givning mobile device approch as med: flex means=> mobile screens are less than 750 somenthing pixels so hide when the pixels are sma;;
        and be flexible if the pixels are more than mobile deives approach*/}
      <ul className="hidden md:flex">
        <li>
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to="Skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link to="Work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="Skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="Work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Social menu */}
      <div className="hidden lg:flex lg:fixed flex-col left-0 top-[35%] text-[white] font-semibold">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/sumia-khan-287907298"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#310f0f33] opacity-100">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.github.com/Sumiakhan/Projects.git"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#0f5848]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="mailto:sumia2135@gmail.com?cc=bavazeer13@gmail.com&bcc=summikhan5426@gmail.com"
            >
              Email Me <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
            <a className="flex justify-between items-center w-full text-gray-300"
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
