import React from 'react';

import SelectProvider from '../SelectProvider';

import { City } from '../../types';

import { availableCities } from '../../constants';

interface Props {
  onChange?: (city: City) => void;
  className?: string;
  history?: object;
  city?: City;
}

const CitiesSelector = ({ className, onChange, history, city }: Props) => {
  const handleChange = value => {
    if (onChange) onChange(value);
  };

  return (
    <SelectProvider placeholder={city.label} onChange={handleChange} className={className} options={availableCities} />
  );
};

export default CitiesSelector;
