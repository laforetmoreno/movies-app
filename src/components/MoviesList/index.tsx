import React from "react";

import Movie from "../Movie";

import style from "./style.module.scss";

const MoviesList = ({ movies }: any) => {
  return (
    <ul className={style.wrapper}>
      {movies.map((movie: any) => (
        <Movie key={movie.event.title} movie={movie.event} />
      ))}
    </ul>
  );
};

export default MoviesList;
