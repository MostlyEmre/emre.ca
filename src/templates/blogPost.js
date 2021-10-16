import React from "react";
import { graphql } from "gatsby";
import { Layout } from "../components/Layout";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { Helmet } from "react-helmet";

const BlogPost = ({ data }) => {
  const blog = data.mdx;

  return (
    <Layout>
      <Helmet>
        <title>📝 {blog.frontmatter.title}</title>
      </Helmet>
      <div className=" markdown mt-5 text-justify">
        <h1 className="h2">{blog.frontmatter.title}</h1>
        <p className="text-lg text-gray-600">{blog.frontmatter.description}</p>
        <div className="max-w-md border-b-2 "></div>

        <div className="markdown mt-5">
          <MDXRenderer>{blog.body}</MDXRenderer>
        </div>
      </div>
    </Layout>
  );
};

export default BlogPost;

export const query = graphql`
  query BlogPostQuery($id: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        slug
        tech
        category
        date
      }
      timeToRead
      body
      wordCount {
        words
      }
    }
  }
`;
