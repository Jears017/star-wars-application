import {
  PLANETS_DETAILS_REQUEST,
  PLANETS_DETAILS_RESPONSE,
  PLANETS_DETAILS_RESPONSE_FAIL,
} from '@/constants/actions'

export const planetsDetailsRequest = id => {
  return { type: PLANETS_DETAILS_REQUEST, payload: id }
}

export const planetsDetailsResponse = planets => {
  return { type: PLANETS_DETAILS_RESPONSE, payload: planets }
}

export const planetsDetailsResponseFail = error => {
  return { type: PLANETS_DETAILS_RESPONSE_FAIL, payload: error }
}
