import {
  PLANETS_REQUEST,
  PLANETS_RESPONSE,
  PLANETS_RESPONSE_FAIL,
} from '@/constants/actions'

export const planetsRequest = (page, search) => {
  return { type: PLANETS_REQUEST, payload: { page, search } }
}

export const planetsResponse = planets => {
  return { type: PLANETS_RESPONSE, payload: planets }
}

export const planetsResponseFail = error => {
  return { type: PLANETS_RESPONSE_FAIL, payload: error }
}
