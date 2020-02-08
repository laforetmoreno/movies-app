import React from "react";

import SelectProvider from "../SelectProvider";

import style from "./style.module.scss";

const Header = ({ title = "Filmes", subTitle = "Em cartaz", movies }) => (
  <div className={style.wrapper}>
    <div>
      <h1 className={style.title}>{title}</h1>
      <h3 className={style.subTitle}>{subTitle}</h3>
    </div>
    <SelectProvider options={movies} className={style.select} />
  </div>
);

export default Header;
