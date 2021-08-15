import React from "react";

const HeaderCard = () => {
  return (
    <div className="mb-5 inline-block border-b-2 pb-5">
      <p className="font-bold text-5xl my-4 cursor-default">
        Hello, I'm Emre! <sub className="font-medium text-sm text-pink-400">/Am + Rae/</sub>
      </p>
      <div className="flex cursor-default">
        <div className="inline-block self-center text-3xl mr-4">🧑🏼‍🚀</div>
        <p className="font-light text-2xl my-2 inline-block text-gray-900">Frontend Developer</p>
      </div>

      <div className="flex cursor-default">
        <div className="inline-block self-center text-3xl mr-4">📍</div>

        <p className="font-light text-2xl my-2 inline-block text-gray-900">Toronto, ON</p>
      </div>
    </div>
  );
};

export default HeaderCard;
