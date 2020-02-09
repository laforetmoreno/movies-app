import React from "react";

import CitiesSelector from "../CitiesSelector";
import MovieSelector from "../MoviesSelector";
import { Movie } from "../../types";

import style from "./style.module.scss";

interface IProps {
  title?: string;
  onChange?: (city: any) => void;
  subTitle?: string;
  movies?: Movie[];
  history?: object;
  city?: object;
}

const Header = ({ title = "Filmes", subTitle = "Em cartaz", onChange, history, movies, city }: IProps) => (
  <div className={style.wrapper}>
    <div>
      <h1 className={style.title}>{title}</h1>
      <h3 className={style.subTitle}>{subTitle}</h3>
    </div>
    <CitiesSelector history={history} city={city} onChange={onChange} className={style.select} />
    <MovieSelector options={movies} history={history} onChange={onChange} className={style.select} />
  </div>
);

export default Header;
