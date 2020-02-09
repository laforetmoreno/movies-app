import React from "react";

import TagList from "../TagList";

import { Movie } from "../../types";

import style from "./style.module.scss";

interface Props {
  movie?: Movie;
}

const MovieListItem = ({ movie }: Props) => (
  <li>
    <a
      className={style.wrapper}
      rel="noopener noreferrer"
      target="_blank"
      href={movie.trailers[0].url ? movie.trailers[0].url : movie.siteURL}
    >
      <img className={style.image} alt={movie?.title} src={movie?.images[0]?.url} />
      <span className={style?.title}>{movie?.title}</span>
      <TagList tags={movie.tags} />
    </a>
  </li>
);

export default MovieListItem;
