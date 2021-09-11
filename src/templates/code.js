import React from "react";
import { graphql } from "gatsby";
import { Layout } from "../components/Layout";
import { Helmet } from "react-helmet";
import { ProjectCards } from "../components/ProjectCards";

const Code = ({ pageContext, data }) => {
  const { currentPage, numPages } = pageContext;
  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;
  const prevPage = currentPage - 1 === 1 ? "/" : `/${currentPage - 1}`;
  const nextPage = `/${currentPage + 1}`;

  const projects = data.allProjects.nodes;
  const featured = data.featuredProjects.nodes;

  return (
    <Layout>
      <Helmet>
        <title>👨‍💻 Code | Emre's Space</title>
      </Helmet>
      <div className="my-5">
        <h1 className="h2 mb-3">Code</h1>
        <section className="bg-gradient-to-tl from-blue-500 via-blue-700 to-blue-800 p-6 text-gray-50 max-w-4xl text-lg font-light text-justify">
          <p>
            Being a self-taught developer means that I don't hesitate to delve into documentation. I am disciplined and have a passion for coding and
            technology. Here are the projects I've been creating during my developer journey.
          </p>
        </section>
        <h2 className="h3 mt-5 mb-2">Featured Projects</h2>
        <ProjectCards projects={featured} />

        <h2 className="h3 mt-5 mb-2">All Projects</h2>
        <ProjectCards projects={projects} />
      </div>
    </Layout>
  );
};

export default Code;

export const query = graphql`
  query CodePostsPage($skip: Int!, $limit: Int!) {
    allProjects: allMdx(skip: $skip, limit: $limit, filter: { frontmatter: { category: { eq: "Code" } } }) {
      nodes {
        frontmatter {
          title
          slug
          tech
          description
          category
          featured
        }
      }
    }
    featuredProjects: allMdx(filter: { fileAbsolutePath: { regex: "/(code)/" } }) {
      nodes {
        frontmatter {
          title
          slug
          tech
          description
          category
          featured
        }
      }
    }
  }
`;
