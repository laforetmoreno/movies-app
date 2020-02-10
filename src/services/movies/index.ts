import api from '../api';

const urlAPI = city => `/v0/templates/highlights/${city}/partnership/home`;

export const getAllMovies = async (city: number) => api(urlAPI(city));
