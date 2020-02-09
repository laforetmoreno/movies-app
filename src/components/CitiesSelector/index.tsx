import React from "react";

import SelectProvider from "../SelectProvider";

import { availableCities, citiesInfos } from "../../constants";

import splitUrl from "../../utils/splitUrl";

const CitiesSelector = ({ className, onChange, history }) => {
  const handleChange = value => {
    if (onChange) onChange(value);
  };

  const cityDefault = citiesInfos[splitUrl(history.location.pathname, 1)].name;

  return (
    <SelectProvider
      placeholder={cityDefault ? cityDefault : "Selecione a cidade"}
      onChange={handleChange}
      className={className}
      options={availableCities}
      formatOptionLabel={null}
    />
  );
};

export default CitiesSelector;
