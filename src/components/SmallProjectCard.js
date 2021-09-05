import React from "react";
import { v4 as uuidv4 } from "uuid";
import { motion } from "framer-motion";
export const SmallProjectCard = ({ projectData }) => {
  return (
    <div className="px-4 pt-3 pb-3 bg-gray-900 flex flex-col justify-between  max-w-md">
      {/* PROJECT TITLE */}
      <div>
        <h3 className="text-2xl text-gray-50 font-medium mb-4 cursor-default">{projectData.title}</h3>

        {/* PROJECT STACK */}
        <ul className="flex flex-wrap mb-2 cursor-default">
          {projectData.stack.map((tech) => (
            <li className="flex-grow mr-2 bg-gray-700 text-sm text-gray-300 mb-2 py-1 px-2 text-center" key={uuidv4()}>
              {tech}
            </li>
          ))}
        </ul>
      </div>
      {/* PROJECT BUTTONS */}
      {projectData.live ? (
        <div className="mb-1">
          <div className="grid border-gray-300 grid-cols-2">
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.9 }}
              href={projectData.live}
              className="bg-pink-600 py-2 text-center text-sm text-gray-50 hover:bg-pink-800 font-bold uppercase"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Site
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.9 }}
              href={projectData.source}
              className="hover:text-gray-300 text-center text-sm py-2 text-gray-50"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="font-bold uppercase">Source Code</button>
            </motion.a>
          </div>
        </div>
      ) : (
        <div className="grid border-t-4 border-gray-300 grid-cols-1">
          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.9 }}
            href={projectData.source}
            className="hover:text-gray-300 text-center text-sm py-2 text-gray-50"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="font-bold uppercase">Source Code</button>
          </motion.a>
        </div>
      )}
    </div>
  );
};
