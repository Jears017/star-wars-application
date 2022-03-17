import {
  FILMS_DETAILS_REQUEST,
  FILMS_DETAILS_RESPONSE,
  FILMS_DETAILS_RESPONSE_FAIL,
} from '@/constants/actions'
export const filmsDetailsRequest = id => {
  return { type: FILMS_DETAILS_REQUEST, payload: id }
}
export const filmsDetailsResponse = films => {
  return { type: FILMS_DETAILS_RESPONSE, payload: films }
}
export const filmsDetailsResponseFail = error => {
  return { type: FILMS_DETAILS_RESPONSE_FAIL, payload: error }
}
