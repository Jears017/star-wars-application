import {
  FILMS_REQUEST,
  FILMS_RESPONSE,
  FILMS_RESPONSE_FAIL,
} from '@/constants/actions'

export const filmsRequest = page => {
  return { type: FILMS_REQUEST, payload: page }
}

export const filmsResponse = films => {
  return { type: FILMS_RESPONSE, payload: films }
}

export const filmsResponseFail = error => {
  return { type: FILMS_RESPONSE_FAIL, payload: error }
}
