import { Link } from "gatsby";
import React from "react";
import { SiGithub, SiFirebase } from "react-icons/si";

export const ProjectCard = ({ title, date, slug, tech, category, description, live, source, wordCount, timeToRead }) => {
  if (category === "Blog") {
    return (
      <section className="p-4 border-l-8 border-indigo-500  my-4">
        <Link className="inline-block" to={`/${category.toLowerCase()}/${slug}`}>
          <h3 className="h3">{title}</h3>
        </Link>
        {/* Description */}
        <p className="font-semibold text-gray-500">
          {date} <span className="text-gray-300"> • </span>
          {wordCount} words, {timeToRead} mins.
        </p>
        {/* Tech */}
        <p className="text-sm text-gray-400">
          Tags: {tech.map((tool) => (tech.length === tech.indexOf(tool) + 1 ? <span>{tool}</span> : <span key={tool}>{tool}, </span>))}
        </p>
      </section>
    );
  }

  return (
    <section className="p-4 border-l-8 border-indigo-500  my-4">
      <Link className="inline-block" to={`/${category.toLowerCase()}/${slug}`}>
        <h3 className="h3">{title}</h3>
      </Link>
      {/* Description */}
      <p className="text-lg font-light mb-1">{description}</p>
      {/* Tech */}
      <p className="text-sm text-gray-400">
        {tech.map((tool) => (tech.length === tech.indexOf(tool) + 1 ? <span>{tool}</span> : <span key={tool}>{tool}, </span>))}
      </p>

      {/* Buttons */}
      {category === "Code" ? (
        <div className="mt-2 flex font-medium text-lg">
          <a href={live} className="mr-6 flex items-center" target="_blank" rel="noopener noreferrer">
            <SiFirebase className="mr-2" /> Live Site
          </a>

          <a href={source} className="flex items-center" target="_blank" rel="noopener noreferrer">
            <SiGithub className="mr-2" /> Source Code
          </a>
        </div>
      ) : null}
    </section>
  );
};
