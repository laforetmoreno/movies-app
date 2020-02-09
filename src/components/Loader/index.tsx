import React from "react";

import style from "./style.module.scss";

interface Props {
  size?: number;
  weight?: number;
  color?: string;
  minHeight?: boolean;
}

const Loader = ({ size = 80, weight = 6, color = "#f90", minHeight }: Props) => {
  return (
    <div className={`${style.ldsRing} ${minHeight && style.minHeight}`}>
      <div
        style={{
          width: `${size}px`,
          height: `${size}px`,
          border: `${weight}px solid #fff`,
          borderColor: `${color} transparent transparent transparent`
        }}
      ></div>
      <div
        style={{
          width: `${size}px`,
          height: `${size}px`,
          border: `${weight}px solid #fff`,
          borderColor: `${color} transparent transparent transparent`
        }}
      ></div>
      <div
        style={{
          width: `${size}px`,
          height: `${size}px`,
          border: `${weight}px solid #fff`,
          borderColor: `${color} transparent transparent transparent`
        }}
      ></div>
      <div
        style={{
          width: `${size}px`,
          height: `${size}px`,
          border: `${weight}px solid #fff`,
          borderColor: `${color} transparent transparent transparent`
        }}
      ></div>
    </div>
  );
};

export default Loader;
