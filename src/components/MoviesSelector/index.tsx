import React from 'react';
import SelectProvider from '../SelectProvider';

import style from './style.module.scss';

interface Props {
  className?: string;
  history?: object;
  options?: any;
}

interface Option {
  siteURL?: string;
  title?: string;
}

interface FormatOptionLabel {
  value?: string;
  label?: string;
}

const MovieSelector = ({ className, history, options }: Props) => {
  const formattedOptions = options.map((option: Option) => ({
    value: option.siteURL,
    label: option.title,
  }));

  const formatOptionLabel = ({ value, label }: FormatOptionLabel) => (
    <a className={style.option} rel="noopener noreferrer" target="_blank" href={value}>
      {label}
    </a>
  );

  return (
    <SelectProvider
      placeholder="Selecione um filme"
      className={style.select}
      options={formattedOptions}
      formatOptionLabel={formatOptionLabel}
    />
  );
};

export default MovieSelector;
