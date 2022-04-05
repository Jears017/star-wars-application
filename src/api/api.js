import * as axios from 'axios'
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth'

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
  getPlanets (page, search) {
    return instance
      .get(`${PLANETS_API_PATH}/?page=${page}&search=${search}`)
      .then(results => results.data)
  },
  getPlanetsDetails (id) {
    return instance
      .get(`${PLANETS_API_PATH}/${id}`)
      .then(results => results.data)
  },
}
export const charactersAPI = {
  getCharacters (page, search) {
    return instance
      .get(`${CHARACTERS_API_PATH}/?page=${page}&search=${search}`)
      .then(results => results.data)
  },
  getCharactersDetails (id) {
    return instance
      .get(`${CHARACTERS_API_PATH}/${id}`)
      .then(results => results.data)
  },
}
export const starshipsAPI = {
  getStarships (page, search) {
    return instance
      .get(`${STARSHIPS_API_PATH}/?page=${page}&search=${search}`)
      .then(results => results.data)
  },
  getStarshipsDetails (id) {
    return instance
      .get(`${STARSHIPS_API_PATH}/${id}`)
      .then(results => results.data)
  },
}
export const filmsAPI = {
  getFilms (page, search) {
    return instance
      .get(`${FILMS_API_PATH}/?page=${page}&search=${search}`)
      .then(results => results.data)
  },
  getFilmsDetails (id) {
    return instance
      .get(`${FILMS_API_PATH}/${id}`)
      .then(results => results.data)
  },
}

export const userAPI = {
  registerUser (email, password) {
    const auth = getAuth()
    return createUserWithEmailAndPassword(auth, email, password).then(
      results => results.user,
    )
  },
  signInUser (email, password) {
    const auth = getAuth()
    return signInWithEmailAndPassword(auth, email, password).then(
      results => results.user,
    )
  },
}
