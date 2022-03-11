import {
  PLANETS_REQUEST,
  PLANETS_RESPONSE,
  PLANETS_RESPONSE_FAIL,
} from '@/constants/actions'

export const planetsRequest = page => {
  return { type: PLANETS_REQUEST, payload: page }
}

export const planetsResponse = planets => {
  return { type: PLANETS_RESPONSE, payload: planets }
}

export const planetsResponseFail = error => {
  return { type: PLANETS_RESPONSE_FAIL, payload: error }
}
