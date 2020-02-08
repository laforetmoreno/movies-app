import React from "react";

import style from "./style.module.scss";

const Container = ({ children }: any) => <main className={style.wrapper}>{children}</main>;

export default Container;
