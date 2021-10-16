import React from "react";
import { graphql } from "gatsby";
import { Layout } from "../components/Layout";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { Helmet } from "react-helmet";
import { v4 as uuidv4 } from "uuid";
import { MetaInfoCard } from "../components/MetaInfoCard";

const DesignPost = ({ data }) => {
  const design = data.mdx;

  return (
    <Layout>
      <Helmet>
        <title>🌌 {design.frontmatter.title}</title>
      </Helmet>
      <div className="markdown mt-5 text-justify">
        <h1 className="h2">{design.frontmatter.title}</h1>
        <p className="text-lg text-gray-600">{design.frontmatter.description}</p>
        <div className="max-w-md border-b-2 "></div>

        <MetaInfoCard
          title={design.frontmatter.title}
          tech={design.frontmatter.tech}
          duration={design.frontmatter.duration}
          solo={design.frontmatter.solo}
          wip={design.frontmatter.wip}
          live={design.frontmatter.live}
          source={design.frontmatter.source}
        />
        {design.frontmatter.features !== null ? (
          <div>
            <h2 className="h3 mt-5 mb-2">Features</h2>
            <p>
              {design.frontmatter.features.map((feature) =>
                design.frontmatter.features.length - 1 > design.frontmatter.features.indexOf(feature) ? (
                  <span key={uuidv4()}>{feature}, </span>
                ) : (
                  <span key={uuidv4()}>{feature}.</span>
                )
              )}
            </p>
          </div>
        ) : null}
        <div className="markdown mt-5">
          <MDXRenderer>{design.body}</MDXRenderer>
        </div>
      </div>
    </Layout>
  );
};

export default DesignPost;

export const query = graphql`
  query DesignPostQuery($id: String!) {
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
