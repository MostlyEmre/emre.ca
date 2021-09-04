import React from "react";
import { v4 as uuidv4 } from "uuid";

export const SmallProjectCard = ({ projectData }) => {
  return (
    <div className="p-4 flex flex-col justify-between bg-gray-100 max-w-md">
      {/* PROJECT TITLE */}
      <div>
        <h3 className="text-2xl font-medium mb-2 cursor-default">{projectData.title}</h3>

        {/* PROJECT STACK */}
        <ul className="flex flex-wrap mb-2 cursor-default">
          {projectData.stack.map((tech) => (
            <li className="flex-grow bg-gray-300 text-sm text-gray-800 mr-1 mb-1 py-1 px-2 text-center" key={uuidv4()}>
              {tech}
            </li>
          ))}
        </ul>
      </div>
      {/* PROJECT BUTTONS */}
      {projectData.live ? (
        <div>
          <div className="grid border-gray-300 grid-cols-2">
            <a href={projectData.live} className="animation py-2 text-center text-sm text-gray-50 bg-purple-500 hover:bg-purple-700 font-bold uppercase" target="_blank" rel="noopener noreferrer">
              Live Site
            </a>
            <a href={projectData.source} className="animation text-center text-sm py-2 text-gray-900 bg-gray-50 hover:bg-gray-200" target="_blank" rel="noopener noreferrer">
              <button className="font-bold uppercase">Source Code</button>
            </a>
          </div>
        </div>
      ) : (
        <div className="grid border-t-4 border-gray-300 grid-cols-1">
          <a href={projectData.source} className="animation py-2 text-center text-gray-900 bg-gray-50 hover:bg-gray-200" target="_blank" rel="noopener noreferrer">
            <button className="font-bold uppercase">Source Code</button>
          </a>
        </div>
      )}
    </div>
  );
};
