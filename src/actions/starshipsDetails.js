import {
  STARSHIPS_DETAILS_REQUEST,
  STARSHIPS_DETAILS_RESPONSE,
  STARSHIPS_DETAILS_RESPONSE_FAIL,
} from '@/constants/actions'

export const starshipsDetailsRequest = id => {
  return { type: STARSHIPS_DETAILS_REQUEST, payload: id }
}

export const starshipsDetailsResponse = starships => {
  return { type: STARSHIPS_DETAILS_RESPONSE, payload: starships }
}

export const starshipsDetailsResponseFail = error => {
  return { type: STARSHIPS_DETAILS_RESPONSE_FAIL, payload: error }
}
