import React from "react";
import SelectProvider from "../SelectProvider";

import style from "./style.module.scss";

const MovieSelector = ({ className, onChange, history, options }) => {
  const handleChange = value => {
    if (onChange) onChange(value);
  };

  const formattedOptions = options.map(option => ({
    value: option.event.siteURL,
    label: option.event.title
  }));

  const formatOptionLabel = ({ value, label }) => {
    return (
      <a className={style.option} rel="noopener noreferrer" target="_blank" href={value}>
        {label}
      </a>
    );
  };

  return (
    <SelectProvider
      placeholder="Selecione um filme"
      onChange={handleChange}
      className={style.select}
      options={formattedOptions}
      formatOptionLabel={formatOptionLabel}
    />
  );
};

export default MovieSelector;
