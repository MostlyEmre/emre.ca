import React, { useState, useEffect } from "react";
import { SiTrakt } from "react-icons/si";
import { motion } from "framer-motion";
import { v4 as uuidv4 } from "uuid";

const TraktShows = ({ config, tmdbAPI }) => {
  const [shows, setShows] = useState([]);
  const [showsLoading, setShowsLoading] = useState(true);

  const newURL = `${config.corsBase}${config.baseURL}/users/${config.user}/history/episodes`;

  const getShows = (config) => {
    setShows([]);

    fetch(newURL, {
      headers: config.headers,
    })
      .then((response) => response.json())
      .then((data) => {
        let watchedShows = data.slice(0, 3);

        watchedShows.forEach((show) => {
          let tmdbURL = `https://api.themoviedb.org/3/tv/${show.show.ids.tmdb}/season/${show.episode.season}/episode/${show.episode.number}/images?api_key=${tmdbAPI}`;
          fetch(tmdbURL)
            .then((response) => response.json())
            .then((data) => {
              show.thumb = `https://image.tmdb.org/t/p//original${data.stills[0].file_path}`;
              setShows((shows) => [...shows, show]);
            })
            .catch((err) => console.log(err));
        });
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
  if (showsLoading) {
    return (
      <div className="bg-gray-100 max-w-xl text-lg text-center mb-4">
        <p className="inline-flex items-center cursor-default my-10">
          Loading the latest TV episodes I've watched from <SiTrakt className="inline-block text-red-500 text-xl mx-1" />
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
      <h3 className="text-2xl mt-5 mb-5 font-bold">Recently watched TV</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {shows.map((show) => (
          <div key={uuidv4()} className="w-full bg-gray-200  flex flex-col justify-between text-gray-900 px-3 pt-1 pb-3">
            <div className="mt-2 mb-1 aspect-w-16 aspect-h-9">
              <img
                src={show.thumb}
                className="object-cover border-2 border-gray-100 shadow-md"
                alt={`${show.show.title}: ${show.episode.title} Thumbnail`}
              />
            </div>
            <div className="">
              <p className="text-sm font-light">{show.episode.title}</p>

              <p className="text-xl mb-2 font-normal">{show.show.title}</p>
            </div>
            <p className="text-xs font-bold">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.9 }}
                className="text-gray-800 inline-block px-2 py-1 mr-2 bg-yellow-400"
                href={`https://www.imdb.com/title/${show.episode.ids.imdb}/`}
                target="_blank"
                rel="noopener noreferrer"
              >
                IMDb
                {/* <p>Trakt: {show.episode.ids.trakt}</p> */}
              </motion.a>
              <span className="cursor-default bg-gray-50 text-gray-900 px-2 py-1 mr-2">Season {show.episode.season}</span>
              {/* <span className="cursor-default bg-gray-50 rounded-xl border-2 shadow text-gray-900 px-2 py-1">Episode {show.episode.number}</span> */}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TraktShows;
