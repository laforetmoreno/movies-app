import React from "react";

import SelectProvider from "../SelectProvider";

import { availableCities } from "../../constants";

const CitiesSelector = ({ className, onChange, history, city }) => {
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
