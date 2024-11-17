import React, { useState } from "react";
import { assets } from "../assets/assets";
import Button from "./UI/Button";
import LazyImage from "./UI/LazyImage";
import { InView } from "react-intersection-observer";

const Download = () => {
  const [isSectionVisible, setIsSectionVisible] = useState(false);

  return (
    <InView
      onChange={(inView) => {
        // Parent section logic
        if (inView) setIsSectionVisible(true);
      }}
      threshold={0.3}
    >
      {({ ref }) => (
        <section
          ref={ref}
          id="Downloads"
          className={` bg-[#07090E] w-full  relative section ${
            isSectionVisible ? "section-visible" : ""
          }`}
        >
          <div className="max-w-7xl w-full  mx-auto pt-10  px-5 relative">
            <div className="mt-10">
              <div className="flex items-center flex-col">
                <img
                  //   className="w-12 h-12 object-contain block p-3 rounded-full bg-blueButton"
                  src={assets.solologo}
                  alt="sparks"
                  className="w-auto h-auto object-contain"
                />
                {/* <LazyImage
              src={assets.solologo}
              alt="sparks"
              className="w-auto h-auto object-contain"
            /> */}
                <div className="mt-5 text-center max-w-[800px]">
                  <h1 className="text-white text-2xl font-inter">
                    Discover, Connect, and Trade on TalkStuff!
                  </h1>
                  <p className="mt-3 text-center text-white">
                    Your all-in-one app for socializing, dating, and shopping.
                    Whether you’re looking to make new friends, find that
                    special someone, or buy and sell products effortlessly,
                    TalkStuff has it all. Join a community that brings
                    everything you love into one seamless experience
                  </p>
                </div>
                <div className="mt-5 flex flex-wrap justify-center gap-6">
                  <Button variant="blue" className="">
                    Download Talkstuff
                  </Button>
                  <Button variant="white" className=" flex gap-2 items-center">
                    <a href="#Features" className=" flex gap-2 items-center">
                      Learn More
                      <img src={assets.arrowup} alt="" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
            <div className="w-[80%] md:w-[50%] mx-auto mt-9">
              <img
                src={assets.phone9}
                className="w-full h-auto object-contain"
                alt=""
              />
              {/* <LazyImage
            src={assets.phone9}
            className="w-full h-auto object-contain"
            alt=""
          /> */}
            </div>
          </div>
          <div className="w-full h-[150px] gradient absolute bottom-0"></div>
        </section>
      )}
    </InView>
  );
};

export default Download;
