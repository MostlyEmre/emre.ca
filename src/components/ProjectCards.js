import React from "react";
import { ProjectCard } from "./ProjectCard";

export const ProjectCards = ({ projects }) => {
  return (
    <section className="max-w-4xl mt-3 grid grid-cols-1 sm:grid-cols-2">
      {projects.map((project) =>
        project.frontmatter.category === "Code" ? (
          <ProjectCard
            key={project.frontmatter.slug}
            category={project.frontmatter.category}
            title={project.frontmatter.title}
            slug={project.frontmatter.slug}
            tech={project.frontmatter.tech}
            description={project.frontmatter.description}
            live={project.frontmatter.live}
            source={project.frontmatter.source}
          />
        ) : (
          <ProjectCard
            key={project.frontmatter.slug}
            category={project.frontmatter.category}
            title={project.frontmatter.title}
            slug={project.frontmatter.slug}
            tech={project.frontmatter.tech}
            description={project.frontmatter.description}
          />
        )
      )}
    </section>
  );
};
