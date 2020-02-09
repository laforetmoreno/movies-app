import React from "react";
import Select from "react-select";

import { Options } from "../../types";

interface Props {
  placeholder?: string;
  onChange?: ({ label, path, value }: Options) => void;
  className?: string;
  options?: Options[];
  formatOptionLabel?: any;
}

const SelectProvider = ({ placeholder, onChange, className, options, formatOptionLabel }: Props) => (
  <Select
    formatOptionLabel={formatOptionLabel}
    placeholder={placeholder}
    onChange={onChange}
    className={className}
    options={options}
  />
);

export default SelectProvider;
