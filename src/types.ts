export interface Images {
  type?: string;
  url?: string;
}

export interface Trailer {
  type?: string;
  url?: string;
  embeddedUrl?: string;
}

export interface Options {
  label?: string;
  path?: string;
  value?: number;
}

export interface Movie {
  id: string;
  title: string;
  city: string;
  siteURL: string;
  tags?: any;
  trailers?: Trailer[];
  images?: Images[];
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
