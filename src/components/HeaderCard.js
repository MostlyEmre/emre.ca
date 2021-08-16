import React from "react";

const HeaderCard = () => {
  return (
    <div className="max-w-md border-b-2 pb-5">
      <p className="font-bold text-4xl sm:text-5xl mt-4 mb-2 sm:my-4 cursor-default">
        Hello, I'm Emre! <sub className="font-medium text-sm text-pink-400">/Am + Rae/</sub>
      </p>
      <div className="flex cursor-default">
        <div className="inline-block self-center text-2xl sm:text-3xl mr-2 sm:mr-4">🧑🏼‍🚀</div>
        <p className="font-light text-xl sm:text-2xl my-2 inline-block text-gray-900">Frontend Developer (Ex-UX/UI)</p>
      </div>

      <div className="flex cursor-default">
        <div className="inline-block self-center text-2xl sm:text-3xl mr-2 sm:mr-4">📍</div>

        <p className="font-light text-xl sm:text-2xl my-2 inline-block text-gray-900">Toronto, ON</p>
      </div>
    </div>
  );
};

export default HeaderCard;
