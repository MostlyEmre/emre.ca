import React, { useEffect, useState } from "react";
import Trakt from "../components/Trakt";
import { Layout } from "../components/Layout";
const About = () => {
  const [imgURL, setImgURL] = useState([]);

  useEffect(() => {
    setImgURL(["https://i.imgur.com/WxvQn8k.png", "https://i.imgur.com/8nP4SSY.jpeg"]);
  }, []);

  return (
    <Layout>
      <Trakt />
    </Layout>
  );
};

export default About;
