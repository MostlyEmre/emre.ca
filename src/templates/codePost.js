import React from "react";
import { graphql } from "gatsby";
import { Layout } from "../components/Layout";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { Helmet } from "react-helmet";
import { v4 as uuidv4 } from "uuid";
import { MetaInfoCard } from "../components/MetaInfoCard";

const CodePost = ({ data }) => {
  const code = data.mdx;

  return (
    <Layout>
      <Helmet>
        <title>🌌 {code.frontmatter.title}</title>
      </Helmet>
      <div className=" markdown mt-5 text-justify">
        <h1 className="h2">{code.frontmatter.title}</h1>
        <p className="text-lg text-gray-600">{code.frontmatter.description}</p>
        <div className="max-w-md border-b-2 "></div>

        <MetaInfoCard
          title={code.frontmatter.title}
          tech={code.frontmatter.tech}
          duration={code.frontmatter.duration}
          solo={code.frontmatter.solo}
          wip={code.frontmatter.wip}
          live={code.frontmatter.live}
          source={code.frontmatter.source}
        />
        {code.frontmatter.features !== null ? (
          <div>
            <h2 className="h3 mt-5 mb-2">Features</h2>
            <p>
              {code.frontmatter.features.map((feature) =>
                code.frontmatter.features.length - 1 > code.frontmatter.features.indexOf(feature) ? (
                  <span key={uuidv4()}>{feature}, </span>
                ) : (
                  <span key={uuidv4()}>{feature}.</span>
                )
              )}
            </p>
          </div>
        ) : null}
        <div className="markdown mt-5">
          <MDXRenderer>{code.body}</MDXRenderer>
        </div>
      </div>
    </Layout>
  );
};

export default CodePost;

export const query = graphql`
  query CodePostQuery($id: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        slug
        title
        description
        features
        duration
        solo
        wip
        tech
        live
        source
      }
      timeToRead
      body
      wordCount {
        words
      }
    }
  }
`;
