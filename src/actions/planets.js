import {
  PLANETS_REQUEST,
  PLANETS_RESPONSE,
  PLANETS_RESPONSE_FAIL,
  GET_PLANETS,
} from '@/constants/actions'

export const planetsRequest = () => {
  return { type: PLANETS_REQUEST }
}

export const planetsResponse = planets => {
  return {
    type: PLANETS_RESPONSE,
    payload: planets,
  }
}

export const planetsResponseFail = error => {
  return {
    type: PLANETS_RESPONSE_FAIL,
    payload: error,
  }
}

export const getPlanets = () => {
  return { type: GET_PLANETS }
}
