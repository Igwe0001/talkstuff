import React from "react";
import Download from "../components/Download";
import { assets } from "../assets/assets";
import Marque from "../components/Marque";

const About = () => {
  return (
    <section className="min-h-screen relative overflow-hidden">
      <div className="relative h-[650px]">
        <div className="w-full h-full top-0 left-0 bg-[#8F3000] opacity-70  absolute z-[1] "></div>
        <div
          style={{
            backgroundImage: `url(${assets.image7})`,
          }}
          className="bg-cover py-[100px] max-w-[1400px] flex items-center  w-full h-full relative gap-4 mx-auto px-4 sm:px-8 pt-6 "
        >
          <div className="font-inter text-center  z-10">
            <span className="text-[#FFAA80] font-bold my-6 block">
              About Us
            </span>
            <h1 className="text-white text-3xl font-semibold mb-3">
              Integrated Advertising Solutions for the Modern Business
            </h1>
            <p className="text-[#E9E9E9] lg:px-12">
              Businesses need multi-channel marketing strategies but often
              struggle to integrate physical and digital platforms effectively.
              Through our Billboards and App, we provide a seamless, one-stop
              shop for brand promotions and customer engagement.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full lg:p-10 ">
        <div className="max-w-7xl mx-auto py-7 px-5 flex flex-col gap-7 lg:flex-row">
          <div className="text-center lg:text-left text-[#212121] lg:flex-1">
            <h1 className="text-2xl mb-2">Vision</h1>
            <p>
              We’re here to be Africa’s go-to digital and marketing hub where
              purpose meets creativity, and powerful stories come to life
              through advertising, media, and tech.
            </p>
          </div>
          <div className="relative rounded-lg overflow-hidden h-[380px] lg:flex-1">
            <div className="w-full h-full top-0 left-0 bg-[#000] opacity-70 absolute z-[1] "></div>
            <div
              style={{
                backgroundImage: `url(${assets.image8})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
              className="bg-cover  flex items-center flex-col text-white w-full h-full relative gap-4 mx-auto px-4 justify-between "
            >
              <h1 className="z-10 text-center text-2xl pt-5 lg:text-right w-full">
                Mission
              </h1>
              <p className="z-10 text-center pb-5">
                At TalkStuff, we help brands grow and shine by crafting smart,
                impactful marketing and advertising solutions. We’re all about
                real stories, fresh ideas, and making a difference online and
                beyond
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full lg:p-10 ">
        <div className="max-w-7xl mx-auto relative">
          <div className="w-full h-full top-0 left-0 bg-[#000] opacity-95 absolute z-[1] "></div>
          <div
            style={{
              backgroundImage: `url(${assets.image9})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
            className="bg-cover  flex items-center flex-col text-white w-full h-full mx-auto py-12"
          >
            <h1 className="z-10 text-center text-2xl pt-5 pb-4 w-full">
              Services
            </h1>
            <p className="z-10 text-center pb-5">
              We transform businesses through our integrated solutions
            </p>

            <div className="mt-10 z-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2">
              <div className="flex gap-5 bg-[#33353D] px-6 py-3 items-center rounded-lg">
                <img src={assets.service1} alt="" />
                <span className="block">Advertising</span>
              </div>
              <div className="flex gap-5 bg-[#33353D] px-4 py-2 items-center rounded-lg">
                <img src={assets.service2} alt="" />
                <span className="block">Printing</span>
              </div>
              <div className="flex gap-5 bg-[#33353D] px-4 py-2 items-center rounded-lg">
                <img src={assets.service3} alt="" />
                <span className="block">Branding and Identity</span>
              </div>
              <div className="flex gap-5 bg-[#33353D] px-4 py-2 items-center rounded-lg">
                <img src={assets.service4} alt="" />
                <span className="block">Consulting</span>
              </div>
              <div className="flex gap-5 bg-[#33353D] px-4 py-2 items-center lg:col-start-1 lg:col-end-3 rounded-lg">
                <img src={assets.service5} alt="" />
                <span className="block">Comprehensive Content Creation</span>
              </div>
              <div className="flex gap-5 bg-[#33353D] px-4 py-2 items-center lg:col-start-3 lg:col-end-5 rounded-lg">
                <img src={assets.service6} alt="" />
                <span className="block">Social Media Management</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Marque />
      <Download />
    </section>
  );
};

export default About;
