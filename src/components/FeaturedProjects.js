import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { v4 as uuidv4 } from "uuid";
import { SmallProjectCard } from "./SmallProjectCard";

const FeaturedProjects = () => {
  const data = useStaticQuery(graphql`
    query FeaturedProjects {
      allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/(projects)/" }, frontmatter: { featured: { eq: true } } }) {
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
  `);

  const projects = data.allMarkdownRemark.nodes;

  return (
    <div>
      <h1 className="h2 my-5">Featured Projects</h1>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 max-w-4xl">
        {projects.map((project) => (
          <SmallProjectCard projectData={project.frontmatter} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProjects;
