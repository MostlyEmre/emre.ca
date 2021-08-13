import React from "react";
import TraktShows from "./TraktShows";
import TraktMovies from "./TraktMovies";
import { traktConfig } from "../traktConfig";

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
      <TraktShows config={traktConfig} />
      <TraktMovies config={traktConfig} />
    </div>
  );
};

export default Trakt;
