import React from "react";
import { assets } from "../../assets/assets";

const GroupPicture = ({ className }) => {
  return (
    <div
      className={` ${className} flex p-1  bg-white rounded-full w-[125px] absolute shadow`}
    >
      <img
        src={assets.image5}
        className="w-8 h-8 rounded-full  object-cover"
        alt="image"
      />
      <img
        src={assets.image4}
        className="w-8 h-8 rounded-full ml-[-10px]  object-cover"
        alt="image"
      />
      <img
        src={assets.image3}
        className="w-8 h-8 rounded-full ml-[-10px] object-cover"
        alt="image"
      />
      <img
        src={assets.image1}
        className="w-8 h-8 rounded-full ml-[-10px] object-cover"
        alt="image"
      />
      <img
        src={assets.image2}
        className="w-8 h-8 rounded-full ml-[-10px] object-cover"
        alt="image"
      />
    </div>
  );
};

export default GroupPicture;
