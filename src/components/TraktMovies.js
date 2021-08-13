import React, { useState } from "react";

const TraktMovies = () => {
  const [movies, setMovies] = useState([]);
  const [moviesLoading, setMoviesLoading] = true;

  // useEffect get shows
  if (moviesLoading) {
    return (
      <div>
        <p>Loading the latest watched movies from Trakt.tv</p>
      </div>
    );
  }
  return (
    <div>
      <p>shows</p>
    </div>
  );
};

export default TraktMovies;
