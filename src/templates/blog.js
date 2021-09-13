import React from "react";
import { graphql } from "gatsby";
import { Layout } from "../components/Layout";
import { Helmet } from "react-helmet";
import { ProjectCards } from "../components/ProjectCards";

const Blog = ({ pageContext, data }) => {
  const { currentPage, numPages } = pageContext;
  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;
  const prevPage = currentPage - 1 === 1 ? "/" : `/${currentPage - 1}`;
  const nextPage = `/${currentPage + 1}`;

  const blogs = data.allMdx.nodes;

  return (
    <Layout>
      <Helmet>
        <title>👨‍💻 Blog | Emre's Space</title>
      </Helmet>
      <div className="my-5">
        <h1 className="h2 mb-3">Blog</h1>
        <section className="bg-gradient-to-tl from-gray-700 via-gray-900 to-black p-6 text-gray-50 max-w-4xl text-lg font-light text-justify">
          <p>Here I share some stuff that I wanted to jot down. I will soon add my Obsidian folder.</p>
        </section>

        <ProjectCards projects={blogs} category="Blog" />
      </div>
    </Layout>
  );
};

export default Blog;

export const query = graphql`
  query BlogPostsPage($skip: Int!, $limit: Int!) {
    allMdx(skip: $skip, limit: $limit, filter: { frontmatter: { category: { eq: "Blog" } } }) {
      nodes {
        frontmatter {
          title
          slug
          tech
          category
          rawDate: date(formatString: "X")
          date(fromNow: true)
        }
        timeToRead
        wordCount {
          words
        }
      }
    }
  }
`;
