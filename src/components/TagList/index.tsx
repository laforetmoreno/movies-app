import React from "react";

import Tag from "../Tag";

import style from "./style.module.scss";

const TagList = ({ tags }: any) => (
  <ul className={style.tags}>
    {tags.map((tag: any) => (
      <Tag key={tag} tag={tag} />
    ))}
  </ul>
);

export default TagList;
