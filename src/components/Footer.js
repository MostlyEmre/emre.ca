import { useStaticQuery, graphql } from "gatsby";
import React from "react";
import Social from "./Social";

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
    <div className="my-20">
      <p className="font-light text-lg">Designed and developed by Emre.</p>
      <Social />
    </div>
  );
};

export default Footer;
