import React from "react";
import { ProjectCard } from "./ProjectCard";

export const ProjectCards = ({ projects, category }) => {
  if (category === "Blog") {
    return (
      <section className="max-w-4xl mt-3 grid grid-cols-1 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard
            key={project.frontmatter.slug}
            category={project.frontmatter.category}
            title={project.frontmatter.title}
            slug={project.frontmatter.slug}
            date={project.frontmatter.date}
            tech={project.frontmatter.tech}
            description={project.frontmatter.description}
            wordCount={project.wordCount.words}
            timeToRead={project.timeToRead}
          />
        ))}
      </section>
    );
  }

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
            subcategory={project.frontmatter.subcategory}
            date={project.frontmatter.date}
          />
        )
      )}
    </section>
  );
};
