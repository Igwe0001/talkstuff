import React from "react";
import { assets } from "../../assets/assets";

const GroupPicture = ({className}) => {
  return (
    <div
      className={` ${className} flex p-1  bg-white rounded-full w-[165px] absolute shadow`}
    >
      <img
        src={assets.image5}
        className="w-10 h-10 rounded-full  object-cover"
        alt="image"
      />
      <img
        src={assets.image4}
        className="w-10 h-10 rounded-full ml-[-10px]  object-cover"
        alt="image"
      />
      <img
        src={assets.image3}
        className="w-10 h-10 rounded-full ml-[-10px] object-cover"
        alt="image"
      />
      <img
        src={assets.image1}
        className="w-10 h-10 rounded-full ml-[-10px] object-cover"
        alt="image"
      />
      <img
        src={assets.image2}
        className="w-10 h-10 rounded-full ml-[-10px] object-cover"
        alt="image"
      />
    </div>
  );
};

export default GroupPicture;
