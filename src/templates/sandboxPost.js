import React from "react";
import { graphql } from "gatsby";
import { Layout } from "../components/Layout";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { Helmet } from "react-helmet";

const SandboxPost = ({ data }) => {
  const sandbox = data.mdx;

  return (
    <Layout>
      <Helmet>
        <title>🌌 {sandbox.frontmatter.title}</title>
      </Helmet>
      <div className="max-w-xl mt-5 text-justify">
        <h1 className="h2">{sandbox.frontmatter.title}</h1>
        <p className="text-gray-400 my-1 text-sm">
          {sandbox.frontmatter.slug} // {sandbox.timeToRead} min. // {sandbox.wordCount.words} words
        </p>
        <p className="text-lg text-gray-600">{sandbox.frontmatter.description}</p>
        <div className="max-w-md border-b-2 pb-6"></div>
        <div className="markdown mt-5">
          <MDXRenderer>{sandbox.body}</MDXRenderer>
        </div>
      </div>
    </Layout>
  );
};

export default SandboxPost;

export const query = graphql`
  query SandBoxPostQuery($id: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        slug
        title
        description
      }
      timeToRead
      body
      wordCount {
        words
      }
    }
  }
`;
