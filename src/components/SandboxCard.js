import { Link } from "gatsby";
import React from "react";

export const SandboxCard = ({ title, slug, tech, description }) => {
  return (
    <section className="p-4 border-l-8 border-indigo-500  my-4">
      <Link className="inline-block" to={`/sandbox/${slug}`}>
        <h3 className="h3">{title}</h3>
      </Link>
      {/* Description */}
      <p className="text-lg font-light mb-1">{description}</p>
      {/* Tech */}
      <p className="text-sm text-gray-400">{tech.map((tool) => (tech.length === tech.indexOf(tool) + 1 ? <span>{tool}</span> : <span key={tool}>{tool}, </span>))}</p>
    </section>
  );
};
