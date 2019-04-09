import React from "react";
import MovieItem from "./MovieItem";

const MovieList = ({ movies }) => {
  return (
    <div className="container">
      {movies &&
        movies.map(movie => {
          return <MovieItem movie={movie} key={movie.id} />;
        })}
    </div>
  );
};

export default MovieList;
