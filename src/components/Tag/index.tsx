import React from "react";

import style from "./style.module.scss";

var tagsDict: any = {
  "Em Alta": "alta",
  "Oscar 2020": "oscar",
  Família: "familia",
  Culturais: "culturais"
};

interface Props {
  tag?: any;
}

const Tag = ({ tag }: Props) => {
  const className: any = tagsDict[tag];

  return <li className={`${style.tag} ${style[className]}`}>{tag}</li>;
};

export default Tag;
