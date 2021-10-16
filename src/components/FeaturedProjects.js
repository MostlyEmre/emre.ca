import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { ProjectCards } from "./ProjectCards";

const FeaturedProjects = () => {
  const data = useStaticQuery(graphql`
    query FeaturedProjects {
      allMdx(filter: { frontmatter: { category: { eq: "Code" }, featured: { eq: true } } }, sort: { fields: frontmatter___date, order: DESC }) {
        nodes {
          frontmatter {
            title
            slug
            description
            category
            features
            tech
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

  const featured = data.allMdx.nodes;

  return (
    <div>
      <h1 className="h2 mt-5">Featured Projects</h1>
      <ProjectCards projects={featured} />
      {/* <div className="grid gap-4 grid-cols-1 md:grid-cols-2 max-w-4xl">
        {featured.map((project) => (
          <SmallProjectCard projectData={project.frontmatter} />
        ))}
      </div> */}
    </div>
  );
};

export default FeaturedProjects;
