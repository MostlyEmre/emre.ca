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

  return (
    <div>
      <h2 className="h2 my-5">Technical Skills</h2>
      <div className="flex flex-wrap">
        {skillsDB.map((skill) => (
          <SkillCard skill={skill} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
