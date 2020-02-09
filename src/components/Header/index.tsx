import React from "react";

import CitiesSelect from "../CitiesSelect";

import style from "./style.module.scss";

const Header = ({ title = "Filmes", subTitle = "Em cartaz", onChange, history }) => (
  <div className={style.wrapper}>
    <div>
      <h1 className={style.title}>{title}</h1>
      <h3 className={style.subTitle}>{subTitle}</h3>
    </div>
    <CitiesSelect history={history} onChange={onChange} className={style.select} />
  </div>
);

export default Header;
