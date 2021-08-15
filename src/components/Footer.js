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
    <div className="mt-20 inline-block border-t-2 pt-5 mb-5">
      <p className="font-light text-gray-400 text-lg cursor-default">Designed and developed by me.</p>
      <Social />
    </div>
  );
};

export default Footer;
