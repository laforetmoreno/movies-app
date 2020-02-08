import React from "react";

import style from "./style.module.scss";

const Header = ({ title = "Filmes", subTitle = "Em cartaz" }) => (
  <>
    <h1 className={style.title}>{title}</h1>
    <h3 className={style.subTitle}>{subTitle}</h3>
  </>
);

export default Header;
