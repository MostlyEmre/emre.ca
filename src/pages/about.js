import React from "react";
import Trakt from "../components/Trakt";
import { Layout } from "../components/Layout";
import { graphql } from "gatsby";

const About = ({ data }) => {
  return (
    <Layout>
      <div className="">
        <div className="markdown max-w-xl" dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}></div>

        {/* <div>
          <div className="toc max-w-sm" dangerouslySetInnerHTML={{ __html: data.markdownRemark.tableOfContents }}></div>
        </div> */}
        {/* A photo maybe? */}
        <Trakt />
      </div>
    </Layout>
  );
};

export const query = graphql`
  query AboutQuery {
    markdownRemark(frontmatter: { title: { eq: "about" } }) {
      id
      html
      tableOfContents
    }
  }
`;

export default About;
