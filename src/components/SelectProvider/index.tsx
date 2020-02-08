import React from "react";
import Select from "react-select";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" }
];

const SelectProvider = ({ className, options }) => {
  const formattedOptions = options.map(option => ({ value: option.event.title, label: option.event.title }));

  return <Select className={className} options={formattedOptions} />;
};

export default SelectProvider;
