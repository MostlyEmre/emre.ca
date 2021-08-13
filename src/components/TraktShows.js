import React, { useState, useEffect } from "react";
import { SiTrakt, SiImdb } from "react-icons/si";
import { motion } from "framer-motion";
import { v4 as uuidv4 } from "uuid";

const TraktShows = ({ config }) => {
  const [shows, setShows] = useState([]);
  const [showsLoading, setShowsLoading] = useState(true);

  const newURL = `${config.corsBase}${config.baseURL}/users/${config.user}/history/episodes`;

  const getShows = (config) => {
    fetch(newURL, {
      headers: config.headers,
    })
      .then((response) => response.json())
      .then((data) => {
        let firstThree = data.slice(0, 3);
        setShows(firstThree);
      });
    setShowsLoading(false);
  };

  useEffect(() => {
    getShows(config);
    // const unsubscribe = "",
    // return () => {
    //   unsubscribe
    // }
  }, []);

  // useEffect get shows
  if (!showsLoading) {
    return (
      <div>
        <p className="inline-flex items-center cursor-default my-5">
          Loading the latest watched shows from <SiTrakt className="inline-block text-red-500 text-xl mx-1" />
          <span className="font-bold">
            <a href="https://trakt.tv/users/emrecaydin" className="cursor-pointer" target="_blank" rel="noopener noreferrer">
              Trakt.tv
            </a>
          </span>
          ...
        </p>
      </div>
    );
  }

  return (
    <div>
      <h3 className="text-2xl font-bold">Latest Episodes I've Seen</h3>
      {shows.map((show) => (
        <div key={uuidv4()} className="my-2 inline-block bg-gray-900 text-gray-50 px-5 rounded-lg pt-3 pb-5 mr-4 mb-4">
          <p className="text-md font-light">{show.show.title}</p>

          <p className="text-sm font-bold mb-5">{show.episode.title}</p>
          <p className="text-xs font-bold">
            <span className="bg-gray-50 text-gray-900 px-2 py-1 mr-2">Season {show.episode.season}</span>
            <span className="bg-gray-50 text-gray-900 px-2 py-1">Episode {show.episode.number}</span>
          </p>

          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.9 }} className="inline-block my-4">
            <a href={`https://www.imdb.com/title/${show.episode.ids.imdb}/`} target="_blank" rel="noopener noreferrer">
              <SiImdb className="text-3xl text-yellow-500" />
            </a>
            {/* <p>Trakt: {show.episode.ids.trakt}</p> */}
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default TraktShows;
