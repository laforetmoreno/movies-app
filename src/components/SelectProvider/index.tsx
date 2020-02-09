import React from "react";
import Select from "react-select";

const SelectProvider = ({ placeholder, onChange, className, options, formatOptionLabel }) => (
  <Select
    formatOptionLabel={formatOptionLabel}
    placeholder={placeholder}
    onChange={onChange}
    className={className}
    options={options}
  />
);

export default SelectProvider;
