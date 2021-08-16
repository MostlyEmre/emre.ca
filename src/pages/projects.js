import React, { useState } from "react";
import { Layout } from "../components/Layout";
import { graphql, Link } from "gatsby";
import { v4 as uuidv4 } from "uuid";
import "../styles/global.css";
import DevProjectCard from "../components/DevProjectCard";
const Projects = ({ data }) => {
  // const { title, stack, slug } = data.allMarkdownRemark.nodes.frontmatter;
  // console.log(data);
  const [projectFilter, setProjectFilter] = useState();
  console.log(data);
  const projects = data.allMarkdownRemark.nodes;

  return (
    <Layout>
      <h1 className="h2 my-5">Projects</h1>
      <div className="">
        {projects.map((project) => (
          <DevProjectCard key={uuidv4()} project={project} />
        ))}
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
