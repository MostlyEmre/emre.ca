import React from "react";
import TraktShows from "./TraktShows";
import TraktMovies from "./TraktMovies";
import { traktConfig, tmdbAPI } from "../traktConfig";

const Trakt = () => {
  return (
    <div>
      <TraktMovies config={traktConfig} tmdbAPI={tmdbAPI} />
      <TraktShows config={traktConfig} tmdbAPI={tmdbAPI} />
    </div>
  );
};

export default Trakt;
