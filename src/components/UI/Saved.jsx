import React from 'react'
import { assets } from '../../assets/assets';

const Saved = ({className}) => {
  return (
      <div className={`${className} shadow bg-white flex justify-between gap-4 items-center px-2 py-2 w-[250px] rounded-md`}>
      <div className="bg-lightGreen w-[25px] h-[25px] flex items-center justify-center rounded-md">
        <img
          className="bg-green rounded-full m-3 p-1 block w-4 h-4 z-10 object-contain"
          src={assets.check}
          alt="check"
        />
      </div>
      <div className="flex items-center gap-3 ">
        <div>
          <h1 className="font-bold text-[#212121] font-inter text-sm">Saved</h1>
          <p className="text-[#525866] font-inter text-[10px]">
            This item has been added to your list of saved items.
          </p>
        </div>
        <div>
          <img src={assets.x} alt="X" />
        </div>
      </div>
    </div>
  );
}

export default Saved