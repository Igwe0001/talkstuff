import React from "react";
import { assets } from "../../assets/assets";

const Profile = ({className}) => {
  return (
    <div className={`${className} px-2 py-3 w-[250px] rounded-md bg-white`}>
      <div className="flex items-center justify-between">
        <div className="flex gap-2 items-center">
          <div>
            <img
              className="w-7 h-7 object-cover rounded-full"
              src={assets.kathryn}
              alt="kathryn"
            />
          </div>
          <div className=" ">
            <h1 className="font-inter text-[#0A0D14] ml-1 font-bold text-[10px]">
              Kathryn
            </h1>
            <div className="flex items-center gap-1">
              <div>
                <img
                  src={assets.map}
                  className="w-3 h-3 object-contain"
                  alt="map-pin"
                />
              </div>
              <span className="text-[#525866] text-[10px]">2 Kilometers</span>
            </div>
          </div>
        </div>
        <span className="font-bold text-sm">23</span>
      </div>
      <div className="py-3 flex justify-between ">
        <div className="flex gap-2">
          <div className="py-1 px-2 outline outline-1 outline-[#E2E4E9] text-[#525866] rounded-full text-[7px]">
            Hip hop
          </div>
          <div className="py-1 px-2 outline outline-1 outline-[#E2E4E9] text-[#525866] rounded-full text-[7px]">
            Hip hop
          </div>
          <div className="p-1 px-2 outline outline-1 outline-[#E2E4E9] text-[#525866] rounded-full text-[7px]">
            Hip hop
          </div>
        </div>
        <div className="flex gap-3">
          <div className="p-1 rounded-full  outline outline-1 outline-[#E2E4E9]">
            <img
              src={assets.heart}
              alt="heart"
              className="w-3 h-3 object-contain"
            />
          </div>
          <div className="p-1 rounded-full  outline outline-1 outline-[#E2E4E9]">
            <img
              src={assets.message}
              alt="message"
              className="w-3 h-3 object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
