import React from "react";
import { v4 as uuidv4 } from "uuid";

const DevProjectCard = ({ project }) => {
  const { title, slug, stack, description, features, duration, solo, wip, type, live, source } = project.frontmatter;

  return (
    <div className="bg-gray-200 lg:mr-4 max-w-md mb-4 ">
      <div className="p-4 ">
        {/* Title */}
        <h3 className="h3 mb-2">{title}</h3>

        {/* Meta Details */}
        <div>
          <p>{duration}</p>
          {solo ? <p>Solo</p> : <p>Group</p>}
        </div>

        {/* Description */}
        <p>{description}</p>

        {/* Stack */}
        <ul className="flex mt-4 mb-4 flex-wrap cursor-default">
          <li className="mr-2 uppercase mb-2 text-gray-50 bg-gray-500 px-3 py-1 text-sm">Tech</li>
          {stack.map((tech) => (
            <li className="mr-2  mb-2 text-gray-50 bg-gray-900 px-3 py-1 text-sm" key={uuidv4()}>
              {tech}
            </li>
          ))}
        </ul>

        {/* Web Buttons */}
        <div className="grid grid-cols-2">
          <a href={live} className="py-4 px-6 text-center  text-gray-50 bg-gray-900" target="_blank" rel="noopener noreferrer">
            <button className="font-bold uppercase">Live Site</button>
          </a>
          <a href={source} className="py-4 px-6 text-center text-gray-900 bg-gray-50" target="_blank" rel="noopener noreferrer">
            <button className="font-bold uppercase">Source Code</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default DevProjectCard;
