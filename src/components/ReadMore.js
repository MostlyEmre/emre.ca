import React, { useState } from "react";

const ReadMore = ({ excerpt, full }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  if (!isClicked) {
    return (
      <div className="markdown">
        <p>{excerpt}</p>
        <div className="text-right">
          <button className="font-medium text-gray-600 hover:text-gray-900" onClick={handleClick}>
            Read More
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div>
        <div className="markdown" dangerouslySetInnerHTML={{ __html: full.html }}></div>
        <div className="text-right">
          <button className="font-medium text-gray-600 hover:text-gray-900" onClick={handleClick}>
            Read Less
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReadMore;
