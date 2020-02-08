import React from "react";

import MovieListItem from "../MovieListItem";

import style from "./style.module.scss";

const MoviesList = ({ movies }: any) => {
  return (
    <ul className={style.wrapper}>
      {movies.map((movie: any) => (
        <MovieListItem key={movie.event.title} movie={movie.event} />
      ))}
    </ul>
  );
};

export default MoviesList;
