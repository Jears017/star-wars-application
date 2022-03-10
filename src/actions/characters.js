import {
  CHARACTERS_REQUEST,
  CHARACTERS_RESPONSE,
  CHARACTERS_RESPONSE_FAIL,
} from '@/constants/actions'

export const charactersRequest = () => {
  return { type: CHARACTERS_REQUEST, payload: null }
}

export const charactersResponse = characters => {
  return { type: CHARACTERS_RESPONSE, payload: characters }
}

export const charactersResponseFail = error => {
  return { type: CHARACTERS_RESPONSE_FAIL, payload: error }
}
