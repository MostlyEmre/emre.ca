import { useStaticQuery, graphql } from "gatsby";
import React from "react";

const Footer = () => {
  const data = useStaticQuery(graphql`
    query FooterInfo {
      site {
        siteMetadata {
          title
          description
          siteUrl
        }
      }
    }
  `);

  const { title, description, siteUrl } = data.site.siteMetadata;

  return (
    <div>
      <p>Footer</p>
      <p>{title}</p>
      <p>{description}</p>
      <p>{siteUrl}</p>
    </div>
  );
};

export default Footer;
