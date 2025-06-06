import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { assets } from "../assets/assets";
import Button from "./UI/Button";
import { Link } from "react-router-dom";

const Header = ({ activeLink }) => {
  const [hamburger, setHamburger] = useState(false);

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  const hamburgerEventHandler = () => {
    setHamburger(!hamburger);
  };

  return (
    <header className="h-16 w-full shadow bg-white flex  items-end px-5 pb-3 fixed z-[10000]">
      <nav className="max-w-7xl w-full mx-auto flex justify-between items-center ">
        <Link to="/Home#Home">
          <div className="relative z-20">
            <img src={assets.logoImage} className="w-[150px]" alt="logo" />
          </div>
        </Link>
        <ul className=" gap-6 hidden sm:flex">
          <Link to="/Home#Home">
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
          </Link>
          <Link to="/Home#Features">
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
          </Link>
          <Link to="/Home#Benefits">
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
          </Link>
          <Link to="/About" onClick={() => window.scrollTo(0, 0)}>
            <li
              className={`text-textGrey font-medium ${
                activeLink === "About" ? "active" : ""
              }`}
            >
              About Us
            </li>
          </Link>
        </ul>

        <Button variant="white" className=" hidden sm:block">
          <a href="https://bit.ly/talkstuffapptest">Download App</a>
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
          <Link to="/Home">
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
          </Link>
          <Link to="/#Features">
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
          </Link>
          <Link to="/#Benefits">
            <li onClick={hamburgerEventHandler} className="">
              <a
                className={`text-textGrey text-3xl font-medium ${
                  activeLink === "Benefits" ? "active" : ""
                }`}
                href="#Benefits"
              >
                Benefits
              </a>
            </li>
          </Link>
          <Link to="/About" onClick={() => window.scrollTo(0, 0)}>
            <li
              className={`text-textGrey font-medium mb-[7rem] text-3xl ${
                activeLink === "About" ? "active" : ""
              }`}
            >
              About Us
            </li>
          </Link>

          <Button
            variant="white"
            className="flex self-center"
            onClick={hamburgerEventHandler}
          >
            <Link to="/#Downloads">
              <a href="#Downloads">Download App</a>
            </Link>
          </Button>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
