import React from "react";

import CitiesSelector from "../CitiesSelector";
import MovieSelector from "../MoviesSelector";

import style from "./style.module.scss";

const Header = ({ title = "Filmes", subTitle = "Em cartaz", onChange, history, movies }) => (
  <div className={style.wrapper}>
    <div>
      <h1 className={style.title}>{title}</h1>
      <h3 className={style.subTitle}>{subTitle}</h3>
    </div>
    <CitiesSelector history={history} onChange={onChange} className={style.select} />
    <MovieSelector options={movies} history={history} onChange={onChange} className={style.select} />
  </div>
);

export default Header;
