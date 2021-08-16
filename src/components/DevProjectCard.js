import React from "react";
import { v4 as uuidv4 } from "uuid";

const DevProjectCard = ({ project }) => {
  const { title, slug, stack, description, features, duration, solo, wip, type, live, source } = project.frontmatter;

  return (
    <div className="bg-gray-200 inline-block align-top border-4 border-gray-300 lg:mr-4 max-w-md mb-4 ">
      <div className="p-4 ">
        {/* Title */}
        <h3 className="h3 mb-2">{title}</h3>

        {/* Meta Details */}
        <div className="flex flex-wrap">
          <p className="meta-detail">🪴 {type}</p>
          {wip ? <p className="meta-detail">🧘‍♂️ W.I.P</p> : null}
          <p className="meta-detail">⌛ {duration}</p>
          {solo ? <p className="meta-detail">🥷🏼 Solo</p> : <p className="meta-detail">Group</p>}
        </div>

        {/* Description */}
        <p className="p-4 text-justify bg-gray-50 text-color-500">{description}</p>

        {/* Stack */}
        <ul className="flex mt-4 flex-wrap cursor-default">
          <li className="mr-2 uppercase mb-2 text-gray-50 bg-gray-500 px-3 py-1 text-sm">Tech</li>
          {stack
            .sort(function (a, b) {
              if (a < b) {
                return -1;
              }
              if (a > b) {
                return 1;
              }
              return 0;
            })
            .map((tech) => (
              <li className="mr-2  mb-2 text-gray-50 bg-gray-900 px-3 py-1 text-sm" key={uuidv4()}>
                {tech}
              </li>
            ))}
        </ul>
      </div>
      {/* Web Buttons */}
      {live ? (
        <div className="grid grid-cols-2">
          <a href={live} className="animation py-4 px-6 text-center  text-gray-50 bg-purple-500 hover:bg-purple-700 font-bold uppercase" target="_blank" rel="noopener noreferrer">
            Live Site
          </a>
          <a href={source} className="animation py-4 px-6 text-center text-gray-900 bg-gray-50 hover:bg-gray-200" target="_blank" rel="noopener noreferrer">
            <button className="font-bold uppercase">Source Code</button>
          </a>
        </div>
      ) : (
        <div className="grid grid-cols-1">
          <a href={source} className="animation py-4 px-6 text-center text-gray-900 bg-gray-50 hover:bg-gray-200" target="_blank" rel="noopener noreferrer">
            <button className="font-bold uppercase">Source Code</button>
          </a>
        </div>
      )}
    </div>
  );
};

export default DevProjectCard;
