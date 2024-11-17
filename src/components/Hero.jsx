import React from "react";
import { assets } from "../assets/assets";
import Saved from "./UI/Saved";
import Profile from "./UI/Profile";
import GroupPicture from "./UI/GroupPicture";
import Button from "./UI/Button";
import { InView } from "react-intersection-observer";

const Hero = ({ id, onIntersectionChange }) => {
  return (
    <InView
      as="section"
      id={id}
      onChange={(inView) => onIntersectionChange(id, inView)}
      threshold={0.1} // Adjust as needed for when you want the active link to change
    >
      {({ ref }) => (
        <section
          id="Home"
          ref={ref}
          className="bg-heroBg w-full px-5 scroll-mt-16 pt-16"
        >
          <div className="max-w-7xl w-full  mx-auto pt-10 relative flex flex-col justify-center">
            <Saved className="absolute top-[5%] left-0 rotate-[15deg] hidden md:flex" />
            <Saved className="absolute top-[5%] right-[0%] rotate-[-15deg] hidden md:flex" />
            <Profile className="absolute top-[35%] left-0 rotate-[-20deg] hidden md:block" />
            <Profile className="absolute top-[35%] right-[0%] rotate-[20deg] hidden md:block" />
            <GroupPicture className="absolute top-[20%] left-0 hidden md:flex" />
            <GroupPicture className="absolute top-[20%] right-[0%] hidden md:flex" />
            <div className="mt-20 z-[2]">
              <div className="text-center  max-w-[500px] mx-auto ">
                <h1 className="font-inter italic font-bold text-3xl">
                  <span className="text-textBlue">Connect</span>,{" "}
                  <span className="text-textBlue">Date</span>, and{" "}
                  <span className="text-textBlue">Trade</span>
                </h1>
                <h1 className="font-inter font-bold text-3xl">
                  All in One Place
                </h1>
                <p className="text-textGrey text-center mt-2">
                  Discover a new world where friendships flourish, connections
                  turn into relationships, and shopping meets socializing
                </p>
              </div>
              <div className="mt-5 flex flex-wrap justify-center gap-6">
                <Button
                  variant="blue"
                  className="transition-all duration-200 ease-in hover:translate-y-1"
                >
                  <a href="#Downloads">Download Talkstuff</a>
                </Button>
                <Button variant="white" className=" flex gap-2 items-center">
                  <a href="#Features" className=" flex gap-2 items-center">
                    Learn More
                    <img src={assets.arrowdownsvg} alt="" />
                  </a>
                </Button>
              </div>
            </div>
            <div className="absolute bottom-[5%] md:bottom-[10%]  left-[50%] translate-x-[-50%] w-[80%] md:w-[40%] z-[1]">
              <img
                className=" w-full h-auto object-cover "
                src={assets.circles}
                alt=""
              />
            </div>
            <div className="w-full h-[350px] md:h-[600px] mt-10  flex items-end">
              <div className="w-full h-[70%]  md:h-[50%] mt-0 md:mt-10  flex justify-center bg-blueButton rounded-t-2xl z-[2]">
                <div className="relative w-full">
                  <div className="absolute bottom-0 left-[30%] translate-x-[-30%]">
                    <img
                      src={assets.laptop}
                      className="w-full h-auto object-contain"
                      alt=""
                    />
                  </div>
                  <div className="absolute bottom-0 pl-[60%]">
                    <img
                      src={assets.phone1}
                      className="w-full h-auto object-contain"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </InView>
  );
};

export default Hero;
