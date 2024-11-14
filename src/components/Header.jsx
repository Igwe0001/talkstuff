import { useState } from "react";
import { assets } from "../assets/assets";
import Button from "./UI/Button";

const Header = ({ activeLink }) => {
  const [hamburger, setHamburger] = useState(false);

  const hamburgerEventHandler = () => {
    setHamburger(!hamburger);
  };

  return (
    <header className="h-16 w-full shadow bg-white flex  items-end px-5 pb-3 fixed z-[10000]">
      <nav className="max-w-7xl w-full mx-auto flex justify-between items-center ">
        <div className="relative z-20">
          <img src={assets.logo} className="text-2xl" alt="logo" />
        </div>
        <ul className=" gap-6 hidden sm:flex">
          <li>
            <a
              className={`text-textGrey font-medium ${
                activeLink === "Home" ? "active" : ""
              }`}
              href="#Home"
            >
              Home
            </a>
          </li>
          <li>
            <a
              className={`text-textGrey font-medium ${
                activeLink === "Features" ? "active" : ""
              }`}
              href="#Features"
            >
              Features
            </a>
          </li>
          <li>
            <a
              href="#Benefits"
              className={`text-textGrey font-medium ${
                activeLink === "Benefits" ? "active" : ""
              }`}
            >
              Benefits
            </a>
          </li>
        </ul>
        <Button variant="white" className=" hidden sm:block">
          <a href="#Downloads">Download App</a>
        </Button>
        <div
          onClick={hamburgerEventHandler}
          className="sm:hidden relative z-20"
        >
          <div
            className={`line line1 bg-black ${hamburger ? "trans" : ""}`}
          ></div>
          <div
            className={`line line2 bg-black ${hamburger ? "trans" : ""}`}
          ></div>
          <div
            className={`line line3 bg-black ${hamburger ? "trans" : ""}`}
          ></div>
        </div>
        <ul
          className={`gap-12 sm:hidden absolute w-full min-h-screen transform top-0 left-0 bg-white z-10 p-8 flex flex-col justify-center ${
            hamburger ? "trans" : ""
          }`}
        >
          <li onClick={hamburgerEventHandler}>
            <a
              className={`text-textGrey text-3xl  font-medium ${
                activeLink === "Home" ? "active" : ""
              }`}
              href="#Home"
            >
              Home
            </a>
          </li>
          <li onClick={hamburgerEventHandler}>
            <a
              className={`text-textGrey text-3xl font-medium ${
                activeLink === "Features" ? "active" : ""
              }`}
              href="#Features"
            >
              Features
            </a>
          </li>
          <li onClick={hamburgerEventHandler} className="mb-[7rem]">
            <a
              className={`text-textGrey text-3xl font-medium ${
                activeLink === "Benefits" ? "active" : ""
              }`}
              href="#Benefits"
            >
              Benefits
            </a>
          </li>

          <Button variant="white" className="flex self-center">
            <a href="#Downloads">Download App</a>
          </Button>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
