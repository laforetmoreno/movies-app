import React from 'react';

import CitiesSelector from '../CitiesSelector';
import MovieSelector from '../MoviesSelector';
import { Movie, City } from '../../types';

import style from './style.module.scss';

interface Props {
  title?: string;
  onChange?: (city: City) => void;
  subTitle?: string;
  movies?: Movie[];
  history?: object;
  city?: City;
}

const Header = ({ title = 'Filmes', subTitle = 'Em cartaz', onChange, history, movies, city }: Props) => (
  <div className={style.wrapper}>
    <div>
      <h1 className={style.title}>{title}</h1>
      <h3 className={style.subTitle}>{subTitle}</h3>
    </div>
    <CitiesSelector history={history} city={city} onChange={onChange} className={style.select} />
    <MovieSelector options={movies} history={history} className={style.select} />
  </div>
);

export default Header;
