import React from "react";
import Select from "react-select";

interface IOptions {
  label?: string;
  path?: string;
  value?: number;
}

interface IProps {
  placeholder?: string;
  onChange?: ({ label, path, value }: IOptions) => void;
  className?: string;
  options?: IOptions[];
  formatOptionLabel?: any;
}

const SelectProvider = ({ placeholder, onChange, className, options, formatOptionLabel }: IProps) => (
  <Select
    formatOptionLabel={formatOptionLabel}
    placeholder={placeholder}
    onChange={onChange}
    className={className}
    options={options}
  />
);

export default SelectProvider;
