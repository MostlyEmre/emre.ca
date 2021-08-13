import React from "react";
import { graphql, Link } from "gatsby";
import { v4 as uuidv4 } from "uuid";
import "../styles/global.css";
const Projects = ({ data }) => {
  // const { title, stack, slug } = data.allMarkdownRemark.nodes.frontmatter;
  console.log(data);
  const projects = data.allMarkdownRemark.nodes;

  return (
    <div>
      <p>projects page</p>
      {projects.map((project) => (
        <div>
          <Link to={`/projects/${project.frontmatter.slug}`} key={uuidv4()}>
            <h3>{project.frontmatter.title}</h3>
          </Link>
          {project.frontmatter.live ? (
            <a href={project.frontmatter.live} target="_blank" rel="noopener noreferrer">
              Live Site
            </a>
          ) : null}

          {project.frontmatter.source ? (
            <a href={project.frontmatter.source} target="_blank" rel="noopener noreferrer">
              Source Code
            </a>
          ) : null}
          <ul>
            {project.frontmatter.stack.map((tech) => (
              <li key={uuidv4()}>{tech}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export const query = graphql`
  query DevList {
    allMarkdownRemark {
      nodes {
        frontmatter {
          title
          stack
          slug
          live
          source
        }
      }
    }
  }
`;

export default Projects;
