import React from "react";
import Social from "./Social";

const HeaderCard = () => {
  return (
    <div className="max-w-md">
      <div>
        <p className="font-bold text-4xl sm:text-5xl mt-4 mb-2 sm:mt-4 sm:mb-2 cursor-default">
          Hello, I'm Emre!
          <sup className="cursor-default">
            <span className="font-normal text-sm sm:text-md ml-2 my-2 text-pink-400">/Am + Rae/</span>
          </sup>
        </p>
      </div>
      <Social />
    </div>
  );
};

export default HeaderCard;
