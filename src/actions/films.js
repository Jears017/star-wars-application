import {
  FILMS_REQUEST,
  FILMS_RESPONSE,
  FILMS_RESPONSE_FAIL,
} from '@/constants/actions'

export const filmsRequest = (page, search) => {
  return { type: FILMS_REQUEST, payload: { page, search } }
}

export const filmsResponse = films => {
  return { type: FILMS_RESPONSE, payload: films }
}

export const filmsResponseFail = error => {
  return { type: FILMS_RESPONSE_FAIL, payload: error }
}
