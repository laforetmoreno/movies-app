import React from "react";
import Select from "react-select";

import { Cities, availableCities } from "../../constants";

import splitUrl from "../../utils/splitUrl";

const CitiesSelect = ({ className, onChange, history }) => {
  const handleChange = value => {
    if (onChange) onChange(value);
  };

  const cityDefault = Cities[splitUrl(history.location.pathname, 1)];

  return (
    <Select
      placeholder={cityDefault ? cityDefault : "Selecione a cidade"}
      onChange={handleChange}
      className={className}
      options={availableCities}
    />
  );
};

export default CitiesSelect;
