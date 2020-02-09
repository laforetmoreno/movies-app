export interface Movie {
  id: string;
  title: string;
  city: string;
  siteURL: string;
}

export interface Actions {
  type?: string;
  payload?: any;
}

export interface City {
  name?: string;
  value?: any;
  label?: string;
}

export interface MoviesState {
  readonly data: Movie[];
  readonly loading: boolean;
  readonly error: boolean;
}

export interface CitiesState {
  readonly data: City;
}
