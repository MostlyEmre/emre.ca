import React from "react";
import { Layout } from "../components/Layout";
import { graphql } from "gatsby";
import { v4 as uuidv4 } from "uuid";
import "../styles/global.css";
import DevProjectCard from "../components/DevProjectCard";
import { Helmet } from "react-helmet";
const Projects = ({ data }) => {
  // const { title, stack, slug } = data.allMarkdownRemark.nodes.frontmatter;
  // console.log(data);
  const projects = data.allMarkdownRemark.nodes;
  const featured = projects.filter((project) => project.frontmatter.featured);
  return (
    <Layout>
      {/* Featured Projects */}
      <Helmet>
        <title>🎨 Projects | Emre's Space</title>
      </Helmet>
      <div>
        <h1 className="h2 my-5">Featured Projects</h1>
        <div className="flex flex-grow flex-wrap">
          {featured.map((project) => (
            <DevProjectCard key={uuidv4()} project={project} />
          ))}
        </div>
      </div>
      <div>
        <h1 className="h2 my-5">All Projects</h1>

        <div className="flex flex-grow flex-wrap">
          {projects.map((project) => (
            <DevProjectCard key={uuidv4()} project={project} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query DevList {
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/(projects)/" } }) {
      nodes {
        frontmatter {
          title
          slug
          stack
          description
          features
          duration
          solo
          wip
          type
          live
          source
          featured
        }
      }
    }
  }
`;

export default Projects;
