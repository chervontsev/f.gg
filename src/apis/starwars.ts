import axios from "axios";

const starwarsApi = axios.create({
  baseURL: 'https://swapi.dev/api'
});

export const getCharacters = () => {
  return starwarsApi.get(`/people`);
};

export const getCharacter = (id: string) => {
  return starwarsApi.get(`/people/${id}`);
};