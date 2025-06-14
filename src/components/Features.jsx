import React, { useState } from "react";
import { assets } from "../assets/assets";
import Button from "./UI/Button";
import LazyImage from "./UI/LazyImage";
import { InView } from "react-intersection-observer";
import Form from "./Form";
import { Link } from "react-router-dom";

// import sort from '../assets/spiral-2'

const Features = ({ id, onIntersectionChange }) => {
  const [isSectionVisible, setIsSectionVisible] = useState(false);

  return (
    <InView
      as="section"
      id={id}
      onChange={(inView) => {
        onIntersectionChange(id, inView); // Parent section logic
        if (inView) setIsSectionVisible(true);
      }}
      threshold={0.05} // Adjust as needed for when you want the active link to change
    >
      {({ ref }) => (
        <section
          ref={ref}
          id={id}
          className={`bg-white w-full relative scroll-mt-16 section ${
            isSectionVisible ? "section-visible" : ""
          }`}
        >
          <img
            className="absolute w-[50%] h-auto object-contain   max-w-[1500px] left-[50%] translate-x-[-50%] mx-auto"
            src={assets.spiral}
            alt=""
          />
          <div className="max-w-7xl w-full  mx-auto pt-10  px-5 relative">
            <div className="mt-10">
              <div className="flex items-center flex-col">
                <img
                  className="w-12 h-12 object-contain block p-3 rounded-full bg-blueButton"
                  src={assets.sparks}
                  alt="sparks"
                />
                {/* <LazyImage
                  className="w-12 h-12 object-contain block p-3 rounded-full bg-blueButton"
                  src={assets.sparks}
                  alt="sparks"
                /> */}
                <div className="mt-5 text-center max-w-[800px]">
                  <h1 className="text-[#212121] text-2xl font-inter">
                    Features
                  </h1>
                  <p className="mt-3 text-center text-[#474747]">
                    Experience the power of connection, companionship, and
                    commerce all in one app. With TalkStuff, you’re just a tap
                    away from meaningful conversations, potential matches, and
                    an online marketplace that brings everything you need to
                    your fingertips
                  </p>
                </div>
              </div>
            </div>
            <div className="max-w-5xl mx-auto flex flex-col mt-20 gap-20">
              <InView threshold={0.5} triggerOnce>
                {({ ref, inView }) => (
                  <div
                    ref={ref}
                    className={` h-[420px] md:h-[380px]  mobile-content-left ${
                      inView ? "show" : ""
                    }`}
                  >
                    <div className="flex flex-col md:flex-row h-full">
                      <InView threshold={0.5} triggerOnce>
                        {({ ref, inView }) => (
                          <div
                            ref={ref}
                            className={`flex-1 bg-[#FFF7F0] rounded-2xl flex items-end justify-center content-left ${
                              inView ? "show" : ""
                            }`}
                          >
                            <div className="w-[25%] md:w-[45%] ">
                              <img
                                className="w-full h-auto object-contain"
                                src={assets.phone2}
                                alt="phone"
                              />
                              {/* <LazyImage
                        className="w-full h-auto object-contain"
                        src={assets.phone2}
                        alt="phone"
                      /> */}
                            </div>
                          </div>
                        )}
                      </InView>
                      <InView threshold={0.5} triggerOnce>
                        {({ ref, inView }) => (
                          <div
                            ref={ref}
                            className={`flex-1  flex text-center md:text-left items-center md:pl-20 md:py-20 content-right ${
                              inView ? "show" : ""
                            }`}
                          >
                            <div className="py-5 md:py-0">
                              <span className="font-inter font-bold text-pink-300">
                                Feed
                              </span>
                              <h1 className="font-bold text-black font-inter text-xl my-4">
                                Connect with Friends
                              </h1>
                              <p className="font-inter font-normal text-[#474747] ">
                                Make meaningful connections with friends or meet
                                new people who share your interests. Chat
                                privately or join group conversations to share
                                ideas, laughs, and memories.
                              </p>
                              <Link
                                to="/Connect"
                                onClick={() => window.scrollTo(0, 0)}
                              >
                                <span className="mt-6 bg-pink-300 text-white inline-block p-2 font-semibold rounded-md">
                                  Register now
                                </span>
                              </Link>
                            </div>
                          </div>
                        )}
                      </InView>
                    </div>
                  </div>
                )}
              </InView>
              {/* --------------------- */}

              <InView threshold={0.5} triggerOnce>
                {({ ref, inView }) => (
                  <div
                    ref={ref}
                    className={` h-[420px] md:h-[380px]  mobile-content-right ${
                      inView ? "show" : ""
                    }`}
                  >
                    <div className="flex flex-col md:flex-row-reverse h-full">
                      <InView threshold={0.5} triggerOnce>
                        {({ ref, inView }) => (
                          <div
                            ref={ref}
                            className={`flex-1 bg-[#F0FAFF] rounded-2xl flex items-end justify-center content-right ${
                              inView ? "show" : ""
                            }`}
                          >
                            <div className="w-[25%] md:w-[45%] ">
                              <img
                                className="w-full h-auto object-contain"
                                src={assets.phone4}
                                alt="phone"
                              />
                              {/* <LazyImage
                        className="w-full h-auto object-contain"
                        src={assets.phone2}
                        alt="phone"
                      /> */}
                            </div>
                          </div>
                        )}
                      </InView>
                      <InView threshold={0.5} triggerOnce>
                        {({ ref, inView }) => (
                          <div
                            ref={ref}
                            className={`flex-1  flex text-center md:text-left items-center  md:pr-20 md:py-20 content-left ${
                              inView ? "show" : ""
                            }`}
                          >
                            <div className="py-5 md:py-0">
                              <span className="font-inter font-bold text-[#008DCB]">
                                SupaMall
                              </span>
                              <h1 className="font-bold text-black font-inter text-xl my-4">
                                Marketplace
                              </h1>
                              <p className="font-inter font-normal text-[#474747] ">
                                Buy and sell with ease on TalkStuff’s
                                marketplace. Find items you love or sell what
                                you don’t need — from vintage pieces to
                                brand-new gadgets
                              </p>
                              <Link
                                to="/Market"
                                onClick={() => window.scrollTo(0, 0)}
                              >
                                <span className="mt-6 bg-[#008DCB] text-white inline-block p-2 font-semibold rounded-md">
                                  Register now
                                </span>
                              </Link>
                            </div>
                          </div>
                        )}
                      </InView>
                    </div>
                  </div>
                )}
              </InView>

              {/* ------------ */}

              <InView threshold={0.5} triggerOnce>
                {({ ref, inView }) => (
                  <div
                    ref={ref}
                    className={` h-[420px] md:h-[380px] mobile-content-left ${
                      inView ? "show" : ""
                    }`}
                  >
                    <div className="flex flex-col md:flex-row h-full">
                      <InView threshold={0.5} triggerOnce>
                        {({ ref, inView }) => (
                          <div
                            ref={ref}
                            className={`flex-1 bg-[#FFF0FA] rounded-2xl flex items-end justify-center content-left ${
                              inView ? "show" : ""
                            }`}
                          >
                            <div className="w-[25%] md:w-[45%] ">
                              <img
                                className="w-full h-auto object-contain"
                                src={assets.phone3}
                                alt="phone"
                              />
                              {/* <LazyImage
                        className="w-full h-auto object-contain"
                        src={assets.phone2}
                        alt="phone"
                      /> */}
                            </div>
                          </div>
                        )}
                      </InView>
                      <InView threshold={0.5} triggerOnce>
                        {({ ref, inView }) => (
                          <div
                            ref={ref}
                            className={`flex-1  flex text-center md:text-left items-center md:pl-20 md:py-20 content-right ${
                              inView ? "show" : ""
                            }`}
                          >
                            <div className="py-5 md:py-0">
                              <span className="font-inter font-bold text-[#CB008E]">
                                LuvHub
                              </span>
                              <h1 className="font-bold text-black font-inter text-xl my-4">
                                Find Love
                              </h1>
                              <p className="font-inter font-normal text-[#474747] ">
                                Swipe, match, and chat with singles near you or
                                from anywhere around the world. TalkStuff offers
                                a safe, genuine space to meet your next
                                relationship
                              </p>
                              <Link
                                to="/Luvhub"
                                onClick={() => window.scrollTo(0, 0)}
                              >
                                <span className="mt-6 bg-[#CB008E] text-white inline-block p-2 font-semibold rounded-md">
                                  Register now
                                </span>
                              </Link>
                            </div>
                          </div>
                        )}
                      </InView>
                    </div>
                  </div>
                )}
              </InView>

              {/* ------------ */}
            </div>
          </div>
          <div className=" min-h-[500px] max-w-7xl overflow-hidden mx-auto px-5 md:px-0 mt-20  bg-spiral-2 bg-contain relative">
            <div className="w-[50%] absolute left-[50%] translate-x-[-50%] z-[1]">
              <img
                src={assets.spiral2}
                className="w-full h-auto object-contain opacity-10"
                alt=""
              />
              {/* <LazyImage
                src={assets.spiral2}
                className="w-full h-auto object-contain opacity-10"
                alt=""
              /> */}
            </div>
            <div className="min-h-[500px]  w-full flex items-end z-10 relative">
              <div className="h-[50%] w-full mx-auto">
                <h1 className="text-center font-inter font-bold text-2xl">
                  Additional Highlights
                </h1>
                <div className="flex flex-wrap gap-10 justify-center min-h-[200px]  mt-12 h-full rounded-lg">
                  <InView threshold={0.5} triggerOnce>
                    {({ ref, inView }) => (
                      <div
                        ref={ref}
                        className={`flex bg-white max-w-[390px] min-h-[200px] flex-col items-center rounded-t-lg overflow-hidden content-left ${
                          inView ? "show" : ""
                        }`}
                      >
                        <div className="bg-[#F9F9FB] flex flex-col items-center ">
                          <div className="w-[50%] mt-10">
                            <img
                              className="w-full h-auto object-contain"
                              src={assets.phone5}
                              alt=""
                            />
                            {/* <LazyImage
                          className="w-full h-auto object-contain"
                          src={assets.phone5}
                          alt=""
                        /> */}
                          </div>
                        </div>
                        <h2 className="my-1 font-inter text-center text-[#34363C]">
                          Customizable Profiles
                        </h2>
                      </div>
                    )}
                  </InView>
                  <div className="flex bg-white max-w-[390px] min-h-[200px] flex-col items-center rounded-t-lg overflow-hidden">
                    <div className="bg-[#F9F9FB] flex flex-col items-center ">
                      <div className="w-[50%] mt-10">
                        <img
                          className="w-full h-auto object-contain"
                          src={assets.phone6}
                          alt=""
                        />
                        {/* <LazyImage
                          className="w-full h-auto object-contain"
                          src={assets.phone6}
                          alt=""
                        /> */}
                      </div>
                    </div>
                    <h2 className="my-1 font-inter text-center text-[#34363C]">
                      Advanced Privacy Settings
                    </h2>
                  </div>
                  <InView threshold={0.5} triggerOnce>
                    {({ ref, inView }) => (
                      <div
                        ref={ref}
                        className={`flex bg-white max-w-[390px] min-h-[200px] flex-col items-center rounded-t-lg overflow-hidden content-right ${
                          inView ? "show" : ""
                        }`}
                      >
                        <div className="bg-[#F9F9FB] flex flex-col items-center ">
                          <div className="w-[50%] mt-10">
                            <img
                              className="w-full h-auto object-contain"
                              src={assets.phone7}
                              alt=""
                            />
                            {/* <LazyImage
                          className="w-full h-auto object-contain"
                          src={assets.phone5}
                          alt=""
                        /> */}
                          </div>
                        </div>
                        <h2 className="my-1 font-inter text-center text-[#34363C]">
                          In-App Notifications and Reminders
                        </h2>
                      </div>
                    )}
                  </InView>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full min-h-[620px] px-5  mx-auto mt-32 flex items-center pb-[30px] md:pb-0 bg-[#571D00] relative">
            <div className="w-full absolute left-[50%] translate-x-[-50%] z-[1]">
              <img
                src={assets.spiral2}
                className="w-full h-auto object-contain opacity-[0.01]"
                alt=""
              />
              {/* <LazyImage
                src={assets.spiral2}
                className="w-full h-auto object-contain opacity-[0.01]"
                alt=""
              /> */}
            </div>
            <div className="w-full h-[70px] md:h-[100px] absolute top-[-33px] sm:top-[-20px] sm:skew-y-[-3deg] lg:top-[-60px] md:top-[-40px] bg-white left-0 skew-y-[-6deg] lg:skew-y-[-3deg] xl:top-[-70px] xl:skew-y-[-1deg] 2xl:top-[-80px] 2xl:skew-y-[0deg]"></div>

            <div className="w-full max-w-5xl  mx-auto flex flex-col-reverse md:flex-row items-center">
              <div className="flex-1 flex items-center">
                <div className="max-w-[450px] mt-10 md:mt-0">
                  <h1 className="text-white font-inter font-semibold text-2xl my-1 max-w-[370px]">
                    Be the First to Experience the{" "}
                    <span className="text-[#FA7F42]">New Version!</span>{" "}
                  </h1>
                  <p className="text-white font-inter my-3">
                    We’re excited to announce our upcoming release, packed with
                    new features and enhancements to take your experience to the
                    next level! Want early access? Join our exclusive group of
                    beta testers and help shape the future of our app.
                  </p>
                  <Form />
                </div>
              </div>
              <div className="flex-1  relative flex items-center justify-end">
                <div className=" md:translate-x-[10px] xl:translate-x-[100px] lg:translate-y-[-50px]">
                  <img
                    className="w-full h-auto object-contain"
                    src={assets.phone8}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </InView>
  );
};

export default Features;
