import React, { useEffect, useState } from "react";

const About = () => {
  const [imgURL, setImgURL] = useState([]);

  useEffect(() => {
    setImgURL(["https://i.imgur.com/WxvQn8k.png", "https://i.imgur.com/8nP4SSY.jpeg"]);
  }, []);

  return (
    <div>
      <p>About meee</p>
      {imgURL.map((img) => (
        <img src={img} alt="hello" />
      ))}
    </div>
  );
};

export default About;
