import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { v4 as uuidv4 } from "uuid";

import SocialCard from "./SocialCard";

const Social = ({ marginTop, marginBottom }) => {
  const data = useStaticQuery(graphql`
    query SocialQuery {
      markdownRemark(frontmatter: { title: { eq: "about" } }) {
        frontmatter {
          social {
            color
            icon
            name
            url
          }
        }
      }
    }
  `);

  const socialItems = data.markdownRemark.frontmatter.social;
  return (
    <div className={`${marginTop} ${marginBottom}`}>
      {socialItems.map((social) => (
        <SocialCard key={uuidv4()} social={social} />
      ))}
    </div>
  );
};

export default Social;
