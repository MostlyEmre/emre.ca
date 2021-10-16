import React from "react";
import Trakt from "../components/Trakt";
import { Layout } from "../components/Layout";
import { graphql } from "gatsby";
import { Helmet } from "react-helmet";

const About = ({ data }) => {
  return (
    <Layout>
      <Helmet>
        <title>👨🏻 About | Emre's Space</title>
      </Helmet>
      <div className="mt-5">
        <div className="markdown text-justify" dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}></div>

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
