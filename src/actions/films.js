import {
  FILMS_REQUEST,
  FILMS_RESPONSE,
  FILMS_RESPONSE_FAIL,
} from '@/constants/actions'

export const filmsRequest = () => {
  return { type: FILMS_REQUEST, payload: null }
}

export const filmsResponse = films => {
  return { type: FILMS_RESPONSE, payload: films }
}

export const filmsResponseFail = error => {
  return { type: FILMS_RESPONSE_FAIL, payload: error }
}
