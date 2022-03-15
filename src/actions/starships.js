import {
  STARSHIPS_REQUEST,
  STARSHIPS_RESPONSE,
  STARSHIPS_RESPONSE_FAIL,
} from '@/constants/actions'

export const starshipsRequest = (page, search) => {
  return { type: STARSHIPS_REQUEST, payload: { page, search } }
}

export const starshipsResponse = starships => {
  return { type: STARSHIPS_RESPONSE, payload: starships }
}

export const starshipsResponseFail = error => {
  return { type: STARSHIPS_RESPONSE_FAIL, payload: error }
}
