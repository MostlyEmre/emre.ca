import React from "react";
import { Layout } from "../components/Layout";
// import { graphql, Link } from "gatsby";
// import { v4 as uuidv4 } from "uuid";
import "../styles/global.css";
const Projects = () => {
  // const { title, stack, slug } = data.allMarkdownRemark.nodes.frontmatter;
  // console.log(data);
  // const projects = data.allMarkdownRemark.nodes;

  return (
    <Layout>
      <h1>Projects</h1>
    </Layout>
  );
};

// export const query = graphql`
//   query DevList {
//     allMarkdownRemark {
//       nodes {
//         frontmatter {
//           title
//           stack
//           slug
//           live
//           source
//         }
//       }
//     }
//   }
// `;

export default Projects;
