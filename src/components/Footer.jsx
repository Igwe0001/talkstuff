import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <footer className=" bg-[#07090E] w-full pt-20 px-5 pb-5">
      <div className="max-w-7xl w-full bg-[#232222] flex flex-col relative gap-y-10 md:gap-y-20 rounded-lg mx-auto pt-10 pb-5 px-5">
        <div className="w-[70%] mx-auto absolute bottom-0 left-[50%] translate-x-[-50%] z-[1]">
          <img src={assets.spiral3} alt="" />
        </div>
        <div className="flex flex-col md:flex-row md:justify-between md:items-end relative z-[2]">
          <div className="flex-1 flex flex-col  gap-2">
            <img
              src={assets.footerlogo}
              className="block w-[200px] h-auto mx-auto md:mx-0"
              alt=""
            />
          </div>
          <ul className="flex justify-center md:justify-end pt-5 md:pt-0 flex-1 gap-3 ">
            <li>
              <a className="text-[#7E7E7E]" href="#Home">
                Home
              </a>
            </li>
            <li className="">
              <a className="text-[#7E7E7E]" href="#Features">
                Features
              </a>
            </li>
            <li>
              <a className="text-[#7E7E7E]" href="#Benefits">
                Benefits
              </a>
            </li>
            <li>
              <a className="text-[#7E7E7E]" href="#Downloads">
                Download
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-4 z-[2]">
          <div className="flex flex-col md:flex-row gap-2 items-center">
            <img
              src={assets.phone10}
              alt=""
              className="block w-4 h-4 object-contain"
            />
            <span className="text-[#7E7E7E] text-center md:text-left">
              +234 707 334 9186 or +234 907 200 9659
            </span>
          </div>
          <div className="flex flex-col md:flex-row gap-2 items-center">
            <img
              src={assets.mail01}
              alt=""
              className="block w-4 h-4 object-contain"
            />
            <span className="text-[#7E7E7E] text-center md:text-left">
              info@talkstuff.social or contact@talkstuff.social
            </span>
          </div>
          <div className="flex flex-col md:flex-row gap-2 items-center z-[2]">
            <img
              src={assets.location}
              alt=""
              className="block w-4 h-4 object-contain"
            />
            <span className="text-[#7E7E7E] text-center md:text-left">
              142 Dr Fabian Nwaora, Efab Metropolis, Karsana, FCT, Abuja
            </span>
          </div>
        </div>
        <div className="flex flex-col items-center md:justify-between  md:flex-row-reverse justify-center gap-2 z-[2]">
          <div className="flex items-center justify-center md:justify-start gap-5">
            <img
              src={assets.instagram}
              className="w-5 h-5 object-contain"
              alt=""
            />
            <img
              src={assets.youtube}
              className="w-5 h-5 object-contain"
              alt=""
            />
            <img
              src={assets.linkedin}
              className="w-5 h-5 object-contain"
              alt=""
            />
            <img
              src={assets.facebook}
              className="w-5 h-5 object-contain"
              alt=""
            />
            <img
              src={assets.twitter}
              className="w-5 h-5 object-contain"
              alt=""
            />
          </div>
          <div className="text-[#7E7E7E] text-center">
            <span className="px-2">Terms & Condition</span>
            <span className="px-2">Privacy Policy</span>
          </div>
          <div className="text-[#7E7E7E] text-center">
            © 2024, TalkStuff Digital Services. All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
