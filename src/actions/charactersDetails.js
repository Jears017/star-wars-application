import {
  CHARACTERS_DETAILS_REQUEST,
  CHARACTERS_DETAILS_RESPONSE,
  CHARACTERS_DETAILS_RESPONSE_FAIL,
} from '@/constants/actions'

export const charactersDetailsRequest = id => {
  return { type: CHARACTERS_DETAILS_REQUEST, payload: id }
}

export const charactersDetailsResponse = characters => {
  return { type: CHARACTERS_DETAILS_RESPONSE, payload: characters }
}

export const charactersDetailsResponseFail = error => {
  return { type: CHARACTERS_DETAILS_RESPONSE_FAIL, payload: error }
}
