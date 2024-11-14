import React from "react";
import { assets } from "../assets/assets";
import LazyImage from "./UI/LazyImage";
import { InView } from "react-intersection-observer";

const Benefits = ({ id, onIntersectionChange }) => {
  return (
    <InView
      as="section"
      id={id}
      onChange={(inView) => {
        console.log(`Section ${id} is in view:`, inView);
        onIntersectionChange(id, inView);
      }}
      threshold={0.5} // Adjust as needed for when you want the active link to change
    >
      {({ ref }) => (
        <section
          ref={ref}
          id="Benefits"
          className="h-[650px] w-full scroll-mt-16 p-8"
        >
          <div
            style={{
              backgroundImage: `url(${assets.image6})`,
            }}
            className="bg-cover rounded-lg max-w-7xl flex flex-col md:flex-row w-full h-full relative gap-4 mx-auto px-8 pt-6 overflow-hidden"
          >
            <div className="w-full h-full top-0 left-0 bg-[#00405CC4]  absolute z-[1] "></div>

            {/* ---------- */}
            <div className="flex flex-1 relative z-[2]">
              <div className="font-inter md:pl-20 md:mt-32 text-center md:text-left">
                <h1 className="text-white text-2xl font-semibold mb-3">
                  App Benefits
                </h1>
                <p className="text-[#E9E9E9]">
                  Why Choose TalkStuff? Discover the unique benefits that make
                  connecting with friends, finding love, and exploring the
                  marketplace easy, secure, and enjoyable—all in one app
                  designed to fit your lifestyle
                </p>
              </div>
            </div>
            <div className="flex flex-2 md:flex-1 z-[2] my-scrollable-container">
              <div className="h-full w-full flex flex-col max-w-[350px] md:max-w-none mx-auto gap-5 items-center font-inter">
                <div className="md:w-[70%] flex flex-col gap-5 pb-5">
                  {/* <img src={assets.phone11} alt="" /> */}
                  <LazyImage src={assets.phone11} alt="" />
                  <div className="text-center md:text-left">
                    <h2 className="text-white font-medium">Easy Connections</h2>
                    <p className="text-[#E9E9E9]">
                      Effortlessly connect with friends, find new matches, and
                      chat with groups—all in one app.
                    </p>
                  </div>
                </div>
                <div className="w-[70%] flex flex-col gap-5 pb-5">
                  {/* <img src={assets.phone12} alt="" /> */}
                  <LazyImage src={assets.phone12} alt="" />
                  <div className="text-center md:text-left">
                    <h2 className="text-white font-medium">Secure Messaging</h2>
                    <p className="text-[#E9E9E9]">
                      Enjoy end-to-end encrypted chats for private and secure
                      conversations.
                    </p>
                  </div>
                </div>
                <div className="w-[70%] flex flex-col gap-5 pb-5">
                  {/* <img src={assets.phone13} alt="" /> */}
                  <LazyImage src={assets.phone13} alt="" />
                  <div className="text-center md:text-left">
                    <h2 className="text-white font-medium">
                      Built-In Marketplace
                    </h2>
                    <p className="text-[#E9E9E9]">
                      Buy, sell, and browse items seamlessly without leaving the
                      app
                    </p>
                  </div>
                </div>
                <div className="w-[70%] flex flex-col gap-5 pb-5">
                  {/* <img src={assets.phone14} alt="" /> */}
                  <LazyImage src={assets.phone14} alt="" />
                  <div className="text-center md:text-left">
                    <h2 className="text-white font-medium">
                      Personalized Experience
                    </h2>
                    <p className="text-[#E9E9E9]">
                      Customize your profile and settings to create an
                      experience that’s truly yours
                    </p>
                  </div>
                </div>
                <div className="w-[70%] flex flex-col gap-5 pb-5">
                  {/* <img src={assets.phone15} alt="" /> */}
                  <LazyImage src={assets.phone15} alt="" />
                  <div className="text-center md:text-left">
                    <h2 className="text-white font-medium">
                      Real-Time Notifications
                    </h2>
                    <p className="text-[#E9E9E9]">
                      Stay updated with instant alerts for messages, matches,
                      and marketplace activity
                    </p>
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

export default Benefits;
