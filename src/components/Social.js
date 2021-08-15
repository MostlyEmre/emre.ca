import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import { SiGithub, SiLinkedin, SiInstagram, SiMedium, SiTwitter, SiSpotify } from "react-icons/si";
import SocialCard from "./SocialCard";

const Social = () => {
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
  console.log(socialItems);
  return (
    <div className="mt-4">
      {socialItems.map((social) => (
        <SocialCard social={social} />
      ))}
    </div>
  );
};

export default Social;
