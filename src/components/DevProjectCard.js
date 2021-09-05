import React from "react";
import { v4 as uuidv4 } from "uuid";
import { EmojiProvider, Emoji } from "react-apple-emojis";
import emojiData from "react-apple-emojis/lib/data.json";

const DevProjectCard = ({ project }) => {
  const { title, stack, description, features, duration, solo, wip, type, live, source, featured } = project.frontmatter;

  return (
    <div className="bg-gray-100 border-4 border-gray-300 flex flex-col justify-between md:mr-8 max-w-sm mb-8">
      <div>
        {/* Title */}
        <div className="border-b-4 border-gray-300">
          <h3 className="h3 my-2 px-4">{title}</h3>
        </div>

        {/* Meta Details */}
        <div className="flex flex-wrap bg-gray-200 px-4 pt-2">
          <div className="meta-detail bg-gray-800 text-white">
            <EmojiProvider data={emojiData}>
              <div className="flex content-center">
                <Emoji className="mr-1 self-center align-middle" name="light-bulb" width={16} />
                <p className="">{type}</p>
              </div>
            </EmojiProvider>
          </div>

          {wip ? (
            <div className="meta-detail bg-gray-800 text-white">
              <EmojiProvider data={emojiData}>
                <div className="flex content-center">
                  <Emoji className="mr-1 self-center align-middle" name="person-in-lotus-position" width={16} />
                  <p className="">WIP</p>
                </div>
              </EmojiProvider>
            </div>
          ) : null}

          <div className="meta-detail bg-gray-800 text-white">
            <EmojiProvider data={emojiData}>
              <div className="flex content-center">
                {wip === true ? (
                  <Emoji className="mr-1 self-center align-middle" name="hourglass-not-done" width={16} />
                ) : (
                  <Emoji className="mr-1 self-center align-middle" name="hourglass-done" width={16} />
                )}
                <p className="">{duration}</p>
              </div>
            </EmojiProvider>
          </div>

          {solo ? (
            <div className="meta-detail bg-gray-100 text-gray-900">
              <EmojiProvider data={emojiData}>
                <div className="flex content-center">
                  <Emoji className="mr-1 self-center align-middle" name="ninja" width={16} />
                  <p>Solo</p>
                </div>
              </EmojiProvider>
            </div>
          ) : (
            <div className="meta-detail bg-gray-50 text-gray-900">
              <div className="flex content-center">
                <p>Solo</p>
              </div>
            </div>
          )}
        </div>

        {/* Description */}
        <p className="py-4 px-4 border-t-4 border-gray-300 border-b-4 text-color-500">{description}</p>

        {/* Features */}
        {features !== null ? (
          <div className="mt-2 pb-2 px-4 border-b-4 border-gray-300">
            <h3 className="font-medium text-md mb-2">Features</h3>
            <div>
              <ul className="flex flex-wrap">
                {features.map((feature) => (
                  <li className="bg-gray-300 text-center flex-grow inline-block text-sm mr-2 mb-2 px-2 py-1" key={uuidv4()}>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ) : null}
        {/* Stack */}

        <div className="pb-2 pt-2 px-4">
          <h3 className="font-medium text-md mb-2">Stack</h3>
          <ul className="flex flex-wrap cursor-default">
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
                <li className="mr-2 flex-grow text-center mb-2 text-gray-50 bg-gray-500 px-2 py-1 text-sm" key={uuidv4()}>
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
