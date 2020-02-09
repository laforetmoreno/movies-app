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
