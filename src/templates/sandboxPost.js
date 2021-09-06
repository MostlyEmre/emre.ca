import React from "react";
import { graphql } from "gatsby";
import { Layout } from "../components/Layout";
import { MDXRenderer } from "gatsby-plugin-mdx";
const SandboxPost = ({ data }) => {
  const sandbox = data.mdx;

  return (
    <Layout>
      <div className="max-w-xl text-justify">
        <p>{sandbox.frontmatter.title}</p>
        <p>{sandbox.frontmatter.slug}</p>
        <div className="markdown">
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
      }
      body
    }
  }
`;
