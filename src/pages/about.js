import React, { useEffect, useState } from "react";
import Trakt from "../components/Trakt";
const About = () => {
  const [imgURL, setImgURL] = useState([]);

  useEffect(() => {
    setImgURL(["https://i.imgur.com/WxvQn8k.png", "https://i.imgur.com/8nP4SSY.jpeg"]);
  }, []);

  return (
    <div>
      <p>About meee</p>
      <Trakt />
    </div>
  );
};

export default About;
