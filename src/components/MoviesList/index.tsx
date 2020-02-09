import React from "react";

import { Movie } from "../../types";

import MovieListItem from "../MovieListItem";

import style from "./style.module.scss";

interface Props {
  movies?: Movie[];
}

const MoviesList = ({ movies }: Props) => {
  return (
    <ul className={style.wrapper}>
      {movies.map((movie: any) => (
        <MovieListItem key={movie.title} movie={movie} />
      ))}
    </ul>
  );
};

export default MoviesList;
