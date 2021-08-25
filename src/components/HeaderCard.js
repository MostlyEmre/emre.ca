import React from "react";
import Social from "./Social";

const HeaderCard = () => {
  return (
    <div className="max-w-md ">
      <div>
        <p className="font-bold text-4xl sm:text-5xl mt-4 mb-2 sm:mt-4 sm:mb-2 cursor-default">
          Hello, I'm Emre!
          <sup className="cursor-default">
            <span className="font-normal text-sm sm:text-md ml-2 my-2 text-pink-400">/Am + Rae/</span>
          </sup>
        </p>
      </div>
      <Social />

      <div className="flex cursor-default">
        <div className="inline-block self-center text-2xl sm:text-3xl mr-2 sm:mr-4">🧑🏼‍🚀</div>
        <div>
          <p className="font-normal text-xl sm:text-2xl mt-2 mb-0 inline-block text-gray-900">Frontend Developer</p>
          <p className="font-light text-gray-400 text-sm">Ex-Product Designer</p>
        </div>
      </div>

      <div className="flex cursor-default">
        <div className="inline-block self-center text-2xl sm:text-3xl mr-2 sm:mr-4">📍</div>

        <p className="font-normal text-xl sm:text-2xl my-2 inline-block text-gray-900">Toronto, ON</p>
      </div>
    </div>
  );
};

export default HeaderCard;
