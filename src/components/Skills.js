import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import SkillCard from "./SkillCard";

const Skills = () => {
  const data = useStaticQuery(graphql`
    query SkillsQuery {
      allMarkdownRemark(filter: { frontmatter: { title: { eq: "about" } } }) {
        nodes {
          frontmatter {
            skills {
              color
              icon
              name
              slug
            }
          }
        }
      }
    }
  `);

  const skillsDB = data.allMarkdownRemark.nodes[0].frontmatter.skills;

  console.log(skillsDB);
  return (
    <div>
      {skillsDB.map((skill) => (
        <SkillCard skill={skill} />
      ))}
    </div>
  );
};

export default Skills;
