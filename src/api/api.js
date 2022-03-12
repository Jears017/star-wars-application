import * as axios from 'axios'

import {
  SWAPI_URL,
  PLANETS_API_PATH,
  CHARACTERS_API_PATH,
  STARSHIPS_API_PATH,
  FILMS_API_PATH,
} from '@/constants'

const instance = axios.create({
  baseURL: SWAPI_URL,
})

export const planetsAPI = {
  getPlanets (page) {
    return instance.get(`${PLANETS_API_PATH}/?page=${page}`).then(results => results.data)
  },
}

export const charactersAPI = {
  getCharacters (page) {
    return instance.get(`${CHARACTERS_API_PATH}/?page=${page}`).then(results => results.data)
  },
}

export const starshipsAPI = {
  getStarships () {
    return instance.get(STARSHIPS_API_PATH).then(results => results.data)
  },
}

export const filmsAPI = {
  getFilms () {
    return instance.get(FILMS_API_PATH).then(results => results.data)
  },
}
