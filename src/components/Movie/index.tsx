import React from "react";

import TagList from "../TagList";

import style from "./style.module.scss";

const Movie = ({ movie }: any) => (
  <li>
    <a
      className={style.wrapper}
      rel="noopener noreferrer"
      target="_blank"
      href={movie.trailers[0].url ? movie.trailers[0].url : movie.siteURL}
    >
      <img className={style.image} alt={movie.title} src={movie.images[0].url} />
      <span className={style.title}>{movie.title}</span>
      <TagList tags={movie.tags} />
    </a>
  </li>
);

export default Movie;
