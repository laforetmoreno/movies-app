import React from "react";

import Tag from "../Tag";

import style from "./style.module.scss";

interface Props {
  tags?: string[];
}

const TagList = ({ tags }: Props) => (
  <ul className={style.tags}>
    {tags.map((tag: any) => (
      <Tag key={tag} tag={tag} />
    ))}
  </ul>
);

export default TagList;
