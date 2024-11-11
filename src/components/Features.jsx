import React from "react";
import { assets } from "../assets/assets";
import Button from "./UI/Button";

// import sort from '../assets/spiral-2'

const Features = () => {
  return (
    <section className="min-h-screen bg-white w-full  relative">
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
            <div className="mt-5 text-center max-w-[800px]">
              <h1 className="text-[#212121] text-2xl font-inter">Features</h1>
              <p className="mt-3 text-center text-[#474747]">
                Experience the power of connection, companionship, and commerce
                all in one app. With TalkStuff, you’re just a tap away from
                meaningful conversations, potential matches, and an online
                marketplace that brings everything you need to your fingertips
              </p>
            </div>
          </div>
        </div>
        <div className="max-w-5xl mx-auto flex flex-col mt-20 gap-20">
          <div className=" h-[380px]">
            <div className="flex flex-col md:flex-row h-full">
              <div className="flex-1 bg-[#FFF7F0] rounded-2xl flex items-end justify-center">
                <div className="w-[25%] md:w-[45%] ">
                  <img
                    className="w-full h-auto object-contain"
                    src={assets.phone2}
                    alt="phone"
                  />
                </div>
              </div>
              <div className="flex-1  flex text-center md:text-left items-center md:pl-20 md:py-20">
                <div className="py-5 md:py-0">
                  <span className="font-inter font-bold text-[#CB6600]">
                    Feed
                  </span>
                  <h1 className="font-bold text-black font-inter text-xl my-4">
                    Connect with Friends
                  </h1>
                  <p className="font-inter font-normal text-[#474747] ">
                    Make meaningful connections with friends or meet new people
                    who share your interests. Chat privately or join group
                    conversations to share ideas, laughs, and memories.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* --------------------- */}

          <div className="  h-[380px]">
            <div className="flex flex-col md:flex-row-reverse h-full">
              <div className="flex-1 bg-[#F0FAFF] rounded-2xl flex items-end justify-center">
                <div className="w-[25%] md:w-[45%]">
                  <img
                    className="w-full h-auto object-contain"
                    src={assets.phone4}
                    alt="phone"
                  />
                </div>
              </div>
              <div className="flex-1  flex text-center md:text-left items-center md:pr-20 md:py-20">
                <div className="py-5 md:py-0">
                  <span className="font-inter font-bold text-[#008DCB]">
                    Feed
                  </span>
                  <h1 className="font-bold text-black font-inter text-xl my-4">
                    Connect with Friends
                  </h1>
                  <p className="font-inter font-normal text-[#474747]">
                    Make meaningful connections with friends or meet new people
                    who share your interests. Chat privately or join group
                    conversations to share ideas, laughs, and memories.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ------------ */}

          <div className="max-w-5xl mx-auto   h-[400px]">
            <div className="flex flex-col md:flex-row h-full">
              <div className="flex-1 bg-[#FFF0FA] rounded-2xl flex items-end justify-center">
                <div className="w-[25%] md:w-[45%]">
                  <img
                    className="w-full h-auto object-contain"
                    src={assets.phone3}
                    alt="phone"
                  />
                </div>
              </div>
              <div className="flex-1  flex text-center md:text-left items-center md:pl-20 md:py-20">
                <div className="py-5 md:py-0">
                  <span className="font-inter font-bold text-[#CB008E]">
                    Feed
                  </span>
                  <h1 className="font-bold text-black font-inter text-xl my-4">
                    Connect with Friends
                  </h1>
                  <p className="font-inter font-normal text-[#474747]">
                    Make meaningful connections with friends or meet new people
                    who share your interests. Chat privately or join group
                    conversations to share ideas, laughs, and memories.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ------------ */}
        </div>
      </div>
      <div className=" min-h-[500px] max-w-7xl overflow-hidden mx-auto px-5 md:px-0 mt-20  bg-spiral-2 bg-contain relative">
        <div className="w-[50%] absolute left-[50%] translate-x-[-50%] z-[1]">
          <img
            src={assets.spiral2}
            className="w-full h-auto object-contain"
            alt=""
          />
        </div>
        <div className="min-h-[500px]  w-full flex items-end z-10 relative">
          <div className="h-[70%] w-full mx-auto">
            <h1 className="text-center font-inter font-bold text-2xl">
              Additional Highlights
            </h1>
            <div className="flex flex-wrap gap-10 justify-center  mt-12 h-full rounded-lg">
              <div className="flex bg-white max-w-[390px] flex-col items-center rounded-t-lg overflow-hidden">
                <div className="bg-[#F9F9FB] flex flex-col items-center ">
                  <div className="w-[50%] mt-10">
                    <img
                      className="w-full h-auto object-contain"
                      src={assets.phone5}
                      alt=""
                    />
                  </div>
                </div>
                <h2 className="my-1 font-inter text-center text-[#34363C]">
                  Customizable Profiles
                </h2>
              </div>
              <div className="flex bg-white max-w-[390px] flex-col items-center rounded-t-lg overflow-hidden">
                <div className="bg-[#F9F9FB] flex flex-col items-center ">
                  <div className="w-[50%] mt-10">
                    <img
                      className="w-full h-auto object-contain"
                      src={assets.phone6}
                      alt=""
                    />
                  </div>
                </div>
                <h2 className="my-1 font-inter text-center text-[#34363C]">
                  Advanced Privacy Settings
                </h2>
              </div>
              <div className="flex bg-white max-w-[390px] flex-col items-center rounded-t-lg overflow-hidden">
                <div className="bg-[#F9F9FB] flex flex-col items-center ">
                  <div className="w-[50%] mt-10">
                    <img
                      className="w-full h-auto object-contain"
                      src={assets.phone7}
                      alt=""
                    />
                  </div>
                </div>
                <h2 className="my-1 font-inter text-center text-[#34363C]">
                  In-App Notifications and Reminders
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full min-h-[620px] px-5  mx-auto mt-32 flex items-center pb-[30px] md:pb-0 bg-[#00405C] relative">
        
        <div className="w-full h-[60px] md:h-[100px] absolute top-[-40px] lg:top-[-60px] bg-white left-0 skew-y-[-6deg] lg:skew-y-[-3deg]"></div>
        <div className="w-full max-w-5xl  mx-auto flex flex-col-reverse md:flex-row items-center">
          <div className="flex-1 flex items-center">
            <div className="max-w-[450px] mt-10 md:mt-0">
              <h1 className="text-white font-inter font-semibold text-2xl my-1 max-w-[370px]">
                Be the First to Experience the{" "}
                <span className="text-[#96D0EA]">New Version!</span>{" "}
              </h1>
              <p className="text-white font-inter my-3">
                We’re excited to announce our upcoming release, packed with new
                features and enhancements to take your experience to the next
                level! Want early access? Join our exclusive group of beta
                testers and help shape the future of our app.
              </p>
              <form action="">
                <div className="bg-[#EFEFF31A] p-4 rounded-md">
                  <label className="text-white font-inter" htmlFor="">
                    Sign up now to get an invite and be the first to try it out
                  </label>
                  <input
                    style={{
                      backgroundImage: `url(${assets.mail})`,
                      backgroundPosition: "10px 5px",
                    }}
                    className="bg-no-repeat pl-12 mt-2 placeholder-gray-400 border rounded-md py-2 px-3 w-full"
                    placeholder="Enter your name"
                    // class="bg-no-repeat pl-10 bg-left bg-[url('/path/to/your-image.png')] placeholder-gray-400 border rounded-md py-2 px-3 w-full"
                    type="email"
                  />
                </div>
                <Button varient="blue" className="mt-4">
                  Join the Beta
                </Button>
              </form>
            </div>
          </div>
          <div className="flex-1  relative flex items-center justify-end">
            <div className="max-w-[420px] md:translate-x-[10px] xl:translate-x-[135px]">
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
  );
};

export default Features;
