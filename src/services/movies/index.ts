import api from '../../services/api';

const urlAPI = city => `/v0/templates/highlights/${city}/partnership/home`;

export const getAllMovies = async (city: number) => await api(urlAPI(city));
