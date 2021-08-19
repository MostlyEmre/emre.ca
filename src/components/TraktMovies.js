import React, { useState, useEffect } from "react";
import { SiTrakt } from "react-icons/si";
import { motion } from "framer-motion";
import { v4 as uuidv4 } from "uuid";

const TraktMovies = ({ config, tmdbAPI }) => {
  const [movies, setMovies] = useState([]);
  const [moviesLoading, setMoviesLoading] = useState(true);

  const newMovieURL = `${config.corsBase}${config.baseURL}/users/${config.user}/history/movies`;

  const getMovies = (config) => {
    setMovies([]);

    fetch(newMovieURL, {
      headers: config.headers,
    })
      .then((response) => response.json())
      .then((data) => {
        let watchedMovies = data.slice(0, 3);

        watchedMovies.map((movie) => {
          let tmdbURL = `https://api.themoviedb.org/3/movie/${movie.movie.ids.tmdb}/images?api_key=${tmdbAPI}`;
          fetch(tmdbURL)
            .then((response) => response.json())
            .then((data) => {
              movie.thumb = `https://image.tmdb.org/t/p//original${data.backdrops[0].file_path}`;
              setMovies((movies) => [...movies, movie]);
            })
            .catch((err) => console.log(err));
        });
      });

    setMoviesLoading(false);
  };

  useEffect(() => {
    getMovies(config);
    // const unsubscribe = "",
    // return () => {
    //   unsubscribe
    // }
  }, []);

  if (moviesLoading) {
    return (
      <div className="bg-gray-100">
        <p className="inline-flex items-center cursor-default my-10">
          Loading the latest movies I've watched from <SiTrakt className="inline-block text-red-500 text-xl mx-1" />
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
      <h3 className="text-2xl mt-5 mb-5 font-bold">Recently watched movies</h3>
      <div className="flex items-stretch flex-wrap">
        {movies.map((movie) => (
          <div key={uuidv4()} className="my-2 bg-gray-200  text-gray-900 px-3 pt-1 pb-3 mr-4 mb-4 w-72">
            <div className="mt-2 mb-1 aspect-w-16 aspect-h-9">
              <img src={movie.thumb} className="object-cover border-2 border-gray-100 shadow-md" alt={`${movie.movie.title} Thumbnail`} />
            </div>
            <div className="p-1">
              <h3 className="text-xl font-normal ">{movie.movie.title}</h3>
            </div>
            <p className="text-xs font-bold">
              <motion.a
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.9 }}
                className="text-gray-800 px-2 py-1 mr-2 bg-yellow-400"
                href={`https://www.imdb.com/title/${movie.movie.ids.imdb}/`}
                target="_blank"
                rel="noopener noreferrer"
              >
                IMDb
                {/* <p>Trakt: {movie.movie.ids.trakt}</p> */}
              </motion.a>
              <span className="cursor-default bg-gray-50 inline-block text-gray-900 px-2 py-1 mr-2">{movie.movie.year}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TraktMovies;
