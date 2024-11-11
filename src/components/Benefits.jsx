import React from "react";
import { assets } from "../assets/assets";

const Benefits = () => {
  return (
    <section className="min-h-screen w-full p-8">
      <div
        style={{
          backgroundImage: `url(${assets.image6})`,
        }}
        className="bg-cover rounded-lg max-w-7xl flex w-full min-h-screen relative overflow-hidden"
      >
        <div className="w-full h-full top-0 left-0 bg-[#00405CC4] absolute"></div>

        {/* ---------- */}
        <div className="flex flex-1">
          <div>
            <h1>App Benefits</h1>
            <p>
              Why Choose TalkStuff? Discover the unique benefits that make
              connecting with friends, finding love, and exploring the
              marketplace easy, secure, and enjoyable—all in one app designed to
              fit your lifestyle
            </p>
          </div>
        </div>
        <div className="flex flex-1"></div>
      </div>
    </section>
  );
};

export default Benefits;
