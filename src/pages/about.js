import React, { useEffect, useState } from "react";
import Trakt from "../components/Trakt";
import { Layout } from "../components/Layout";
import { graphql } from "gatsby";

const About = ({ data }) => {
  const [imgURL, setImgURL] = useState([]);
  console.log(data);
  useEffect(() => {
    setImgURL(["https://i.imgur.com/WxvQn8k.png", "https://i.imgur.com/8nP4SSY.jpeg"]);
  }, []);

  return (
    <Layout>
      <h1 className="h2 mb-5">About me</h1>

      <div className="markdown max-w-md" dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}></div>
      {/* A photo maybe? */}
      {/* <Trakt /> */}
    </Layout>
  );
};

export const query = graphql`
  query AboutQuery {
    markdownRemark(frontmatter: { title: { eq: "about" } }) {
      id
      html
    }
  }
`;

export default About;
