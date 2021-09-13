import React from "react";
import { graphql } from "gatsby";
import { Layout } from "../components/Layout";
import { Helmet } from "react-helmet";
import { ProjectCards } from "../components/ProjectCards";

const Sandbox = ({ pageContext, data }) => {
  const { currentPage, numPages } = pageContext;
  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;
  const prevPage = currentPage - 1 === 1 ? "/" : `/${currentPage - 1}`;
  const nextPage = `/${currentPage + 1}`;

  const posts = data.allMdx.nodes;

  return (
    <Layout>
      <Helmet>
        <title>🌌 Sandbox | Emre's Space</title>
      </Helmet>
      <div className="my-5">
        <h1 className="h2 mb-3">Sandbox</h1>

        <section className="bg-gradient-to-tl from-gray-700 via-gray-900 to-black p-6 text-gray-50 max-w-4xl text-lg font-light text-justify">
          <p>
            "There is a fifth dimension beyond that which is known to man. It is a dimension as vast as space and as timeless as infinity. It is the
            middle ground between light and shadow, between science and superstition, and it lies between the pit of man's fears and the summit of his
            knowledge. This is the dimension of imagination. It is an area which we call the <b className="text-yellow-100">Sandbox</b>."
          </p>
        </section>
        <ProjectCards projects={posts} />
      </div>
    </Layout>
  );
};

export default Sandbox;

export const query = graphql`
  query SandboxPostsPage($skip: Int!, $limit: Int!) {
    allMdx(skip: $skip, limit: $limit, filter: { frontmatter: { category: { eq: "Sandbox" } } }) {
      nodes {
        frontmatter {
          title
          slug
          tech
          description
          category
          subcategory
          rawDate: date(formatString: "X")
          date(fromNow: true)
        }
      }
    }
  }
`;
