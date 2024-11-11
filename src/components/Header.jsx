import { useState } from "react";
import { assets } from "../assets/assets";
import Button from "./UI/Button";

const Header = () => {
  const [hamburger, setHamburger] = useState(false);

  const hamburgerEventHandler = () => {
    setHamburger(!hamburger);
  };

  return (
    <header className="h-20 w-full shadow bg-white flex  items-end px-5 pb-3">
      <nav className="max-w-7xl w-full mx-auto flex justify-between items-center ">
        <div className="relative z-20">
          <img src={assets.logo} className="text-2xl" alt="logo" />
        </div>
        <ul className=" gap-6 hidden sm:flex">
          <li>
            <a className="text-textGrey" href="">
              Home
            </a>
          </li>
          <li>
            <a className="text-textGrey" href="">
              Features
            </a>
          </li>
          <li>
            <a className="text-textGrey" href="">
              Benefits
            </a>
          </li>
        </ul>
        <Button variant="white" className=" hidden sm:block">
          Download App
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
          className={`gap-12 sm:hidden absolute w-full min-h-screen h-full transform top-0 left-0 bg-white z-10 p-8 flex flex-col justify-center ${
            hamburger ? "trans" : ""
          }`}
        >
          <li>
            <a className="font-bold text-3xl text-textGrey" href="">
              Home
            </a>
          </li>
          <li>
            <a className="font-bold text-3xl text-textGrey" href="">
              Benefits
            </a>
          </li>
          <li className="mb-[7rem]">
            <a className="font-bold text-3xl text-textGrey" href="">
              Features
            </a>
          </li>

          <Button variant="white" className="flex self-center">
            Download App
          </Button>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
