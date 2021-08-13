import React from "react";
import TraktShows from "./TraktShows";
import TraktMovies from "./TraktMovies";
import { traktConfig, tmdbAPI } from "../traktConfig";

const Trakt = () => {
  const dbInfo = [
    {
      name: "IMDB",
      icon: "SiImdb",
      color: "yellow-400",
    },
    {
      name: "Trakt",
      icon: "SiTrakt",
      color: "red-400",
    },
  ];

  return (
    <div>
      <TraktShows config={traktConfig} tmdbAPI={tmdbAPI} />
      <TraktMovies config={traktConfig} tmdbAPI={tmdbAPI} />
    </div>
  );
};

export default Trakt;
