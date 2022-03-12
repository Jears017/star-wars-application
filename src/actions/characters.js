import {
  CHARACTERS_REQUEST,
  CHARACTERS_RESPONSE,
  CHARACTERS_RESPONSE_FAIL,
} from '@/constants/actions'

export const charactersRequest = page => {
  return { type: CHARACTERS_REQUEST, payload: page }
}

export const charactersResponse = characters => {
  return { type: CHARACTERS_RESPONSE, payload: characters }
}

export const charactersResponseFail = error => {
  return { type: CHARACTERS_RESPONSE_FAIL, payload: error }
}
