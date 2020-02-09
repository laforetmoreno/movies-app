import React from "react";

import SelectProvider from "../SelectProvider";

import { availableCities } from "../../constants";

interface Props {
  onChange?: (city: any) => void;
  className?: string;
  history?: object;
  city?: any;
}

const CitiesSelector = ({ className, onChange, history, city }: Props) => {
  const handleChange = value => {
    if (onChange) onChange(value);
  };

  return (
    <SelectProvider
      placeholder={city.label}
      onChange={handleChange}
      className={className}
      options={availableCities}
      formatOptionLabel={null}
    />
  );
};

export default CitiesSelector;
