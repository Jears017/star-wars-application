import {
  FILMS_DETAILS_REQUEST,
  FILMS_DETAILS_RESPONSE,
  FILMS_DETAILS_RESPONSE_FAIL,
} from '@/constants'

const initialState = {
  isLoading: false,
  isLoaded: false,
  data: {},
  id: null,
  error: null,
  isInitialized: false,
  characters: [],
  planets: [],
}

export default function (state = initialState, { type, payload } = {}) {
  switch (type) {
    case FILMS_DETAILS_REQUEST:
      return {
        ...state,
        isLoading: true,
        id: payload,
      }
    case FILMS_DETAILS_RESPONSE:
      return {
        ...state,
        isLoading: false,
        isLoaded: true,
        data: { ...payload },
        characters: [...payload.characters],
        planets: [...payload.planets],
      }
    case FILMS_DETAILS_RESPONSE_FAIL:
      return { ...state, isLoading: false, error: payload }
    default:
      return state
  }
}
