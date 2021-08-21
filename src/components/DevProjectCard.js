import React from "react";
import { v4 as uuidv4 } from "uuid";
import { motion } from "framer-motion";
const DevProjectCard = ({ project }) => {
  const { title, slug, stack, description, features, duration, solo, wip, type, live, source, featured } = project.frontmatter;

  return (
    <div className="bg-gray-100 border-4 border-gray-300 flex flex-col justify-between md:mr-8 max-w-sm mb-8">
      <div>
        {/* Title */}
        <div className="border-b-4 border-gray-300">
          <h3 className="h3 my-2 px-4">{title}</h3>
        </div>

        {/* Meta Details */}
        <div className="flex flex-wrap bg-gray-200 px-4 pt-2">
          {featured ? <p className="meta-detail bg-green-300">🤩</p> : null}

          <p className="meta-detail">🪴 {type}</p>
          {wip ? <p className="meta-detail">🧘‍♂️ WIP</p> : null}
          <p className="meta-detail">
            {wip === true ? "⏳" : "⌛"} {duration}
          </p>
          {solo ? <p className="meta-detail">🥷🏼 Solo</p> : <p className="meta-detail">Group</p>}
        </div>

        {/* Description */}
        <p className="py-4 px-4 border-t-4 border-gray-300 border-b-4 text-color-500">{description}</p>

        {/* Features */}
        {features !== null ? (
          <div className="mt-2 pb-2 px-4 border-b-4 border-gray-300">
            <h3 className="font-medium text-lg mb-2">Features</h3>
            <div>
              <ul className="flex flex-wrap">
                {features.map((feature) => (
                  <li className="bg-gray-300 text-center flex-grow inline-block text-base mr-2 mb-2 px-3 py-2" key={uuidv4()}>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ) : null}
        {/* Stack */}

        <div className="pb-2 pt-2 px-4">
          <h3 className="font-medium text-lg mb-2">Stack</h3>
          <ul className="flex  flex-wrap cursor-default">
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
                <li className="mr-2 flex-grow text-center  mb-2 text-gray-50 bg-gray-500 px-3 py-2 text-base" key={uuidv4()}>
                  {tech}
                </li>
              ))}
          </ul>
        </div>
      </div>

      {/* Web Buttons */}
      {live ? (
        <div>
          <div className="grid border-t-4 border-gray-300 grid-cols-2">
            <a href={live} className="animation py-4 px-6 text-center  text-gray-50 bg-purple-500 hover:bg-purple-700 font-bold uppercase" target="_blank" rel="noopener noreferrer">
              Live Site
            </a>
            <a href={source} className="animation py-4 px-6 text-center text-gray-900 bg-gray-50 hover:bg-gray-200" target="_blank" rel="noopener noreferrer">
              <button className="font-bold uppercase">Source Code</button>
            </a>
          </div>
        </div>
      ) : (
        <div className="grid border-t-4 border-gray-300 grid-cols-1">
          <a href={source} className="animation py-4 px-6 text-center text-gray-900 bg-gray-50 hover:bg-gray-200" target="_blank" rel="noopener noreferrer">
            <button className="font-bold uppercase">Source Code</button>
          </a>
        </div>
      )}
    </div>
  );
};

export default DevProjectCard;
