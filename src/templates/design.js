import React from "react";
import { graphql } from "gatsby";
import { Layout } from "../components/Layout";
import { Helmet } from "react-helmet";
import { ProjectCards } from "../components/ProjectCards";
const Design = ({ pageContext, data }) => {
  const { currentPage, numPages } = pageContext;
  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;
  const prevPage = currentPage - 1 === 1 ? "/" : `/${currentPage - 1}`;
  const nextPage = `/${currentPage + 1}`;

  const posts = data.allMdx.nodes;

  return (
    <Layout>
      <Helmet>
        <title>🎨 Design | Emre's Space</title>
      </Helmet>
      <div className="my-5">
        <h1 className="h2 mb-3">Design</h1>

        <section className="bg-gradient-to-tl from-gray-700 via-gray-900 to-black p-6 text-gray-50 max-w-4xl text-lg font-light text-justify">
          <p>
            As an ex product designer I did many design projects with early-stage startups. This page includes one of them plus some other design
            projects.
          </p>
        </section>
        <ProjectCards projects={posts} />
      </div>
    </Layout>
  );
};

export default Design;

export const query = graphql`
  query DesignPostsPage($skip: Int!, $limit: Int!) {
    allMdx(skip: $skip, limit: $limit, filter: { frontmatter: { category: { eq: "Design" } } }) {
      nodes {
        frontmatter {
          title
          slug
          tech
          description
          category
        }
      }
    }
  }
`;
