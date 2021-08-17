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
      <h1 className="h2 mb-5">About me</h1>
      {/* A photo maybe? */}
      {/* <Trakt /> */}
    </Layout>
  );
};

export default About;
