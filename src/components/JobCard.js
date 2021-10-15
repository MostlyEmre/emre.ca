import React from "react";
import { EmojiProvider, Emoji } from "react-apple-emojis";
import emojiData from "react-apple-emojis/lib/data.json";
export const JobCard = () => {
  return (
    <div className="animation hidden md:flex dinocursor pl-6 pr-8 border-r-8 border-gray-200 hover:border-indigo-400 py-2">
      <div className="self-center">
        <div className="flex">
          <EmojiProvider data={emojiData}>
            <Emoji className="inline-block self-center text-2xl sm:text-3xl mr-2 sm:mr-4" name="astronaut" width={32} />
          </EmojiProvider>
          {/* <div className="inline-block self-center text-2xl sm:text-3xl mr-2 sm:mr-4">🦄</div> */}
          <div>
            <p className="font-normal text-xl sm:text-2xl mt-2 mb-0 inline-block text-gray-600">Web Developer</p>
            <p className="font-light text-gray-500 text-sm">Ex-Product Designer</p>
          </div>
        </div>
        <div className="flex">
          <EmojiProvider data={emojiData}>
            <Emoji className="inline-block self-center text-2xl sm:text-3xl mr-2 sm:mr-4" name="round-pushpin" width={32} />
          </EmojiProvider>

          <p className="font-normal text-xl sm:text-2xl my-2 inline-block text-gray-600">Toronto, ON</p>
        </div>
      </div>
    </div>
  );
};
