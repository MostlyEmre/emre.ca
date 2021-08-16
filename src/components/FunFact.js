import React, { useState } from "react";

const FunFact = () => {
  const [fact, setFact] = useState({
    text: "Did you know that I was a product designer with 2 years of experience before I changed careers?",
    no: 1,
  });

  return (
    <div className="pb-5 border-b-2">
      <div className="flex justify-between items-center mb-5">
        <h2 className="h2">Fun Fact</h2>
        <button className="bg-gray-200 hover:bg-pink-300 text-gray-900 font-bold py-2 px-4 text-sm">New Fact</button>
      </div>
      <div className="mb-5 max-w-md bg-gray-100 p-4 font-light text-lg  hover:font-extrabold">
        <p>{fact.text}</p>
      </div>
    </div>
  );
};

export default FunFact;
