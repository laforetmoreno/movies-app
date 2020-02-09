import React from "react";
import SelectProvider from "../SelectProvider";

import style from "./style.module.scss";

interface Props {
  className?: string;
  onChange?: (city: any) => void;
  history?: object;
  options?: any;
}

const MovieSelector = ({ className, onChange, history, options }: Props) => {
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
