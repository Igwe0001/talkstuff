import React from "react";
import { assets } from "../assets/assets"; // Assuming you have project1 to project10 in here

const topLogos = [
  assets.project1,
  assets.project2,
  assets.project3,
  assets.project4,
  assets.project5,
  assets.project6,
];

const bottomLogos = [
  assets.project7,
  assets.project8,
  assets.project9,
  assets.project10,
];

const Marque = () => {
  return (
    <div className="overflow-hidden bg-[#FCFCFC] py-32 ">
      <h2 className="text-center text-2xl font-semibold mb-6 text-[#212121]">
        Our Projects
      </h2>

     
      {/* Top Row - Scroll Left */}
      <div className="relative w-full overflow-hidden">
        <div className="flex gap-[12px] animate-marquee whitespace-nowrap">
          {[...topLogos, ...topLogos].map((src, i) => (
            <div
              key={`top-${i}`}
              className="min-w-[160px] h-[120px] flex-shrink-0 bg-white overflow-hidden"
            >
              <img
                src={src}
                alt={`project-top-${i}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Row - Scroll Right */}
      <div className="relative w-full overflow-hidden mt-6">
        <div className="flex gap-[12px] animate-marquee-reverse whitespace-nowrap">
          {[...bottomLogos, ...bottomLogos].map((src, i) => (
            <div
              key={`bottom-${i}`}
              className="min-w-[160px] h-[120px] flex-shrink-0 bg-white overflow-hidden"
            >
              <img
                src={src}
                alt={`project-bottom-${i}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Marque;
