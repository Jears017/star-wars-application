import {
  CHARACTERS_REQUEST,
  CHARACTERS_RESPONSE,
  CHARACTERS_RESPONSE_FAIL,
} from '@/constants'

const initialState = {
  isLoading: false,
  isLoaded: false,
  charactersList: [],
  error: null,
  isInitialized: false,
  page: 1,
  count: null,
}

export default function (state = initialState, { type, payload } = {}) {
  switch (type) {
    case CHARACTERS_REQUEST:
      return { ...state, isLoading: true, page: payload }
    case CHARACTERS_RESPONSE:
      return {
        ...state,
        isLoading: false,
        isLoaded: true,
        charactersList: [...payload.results],
        count: payload.count,
      }
    case CHARACTERS_RESPONSE_FAIL:
      return { ...state, isLoading: false, error: payload }
    default:
      return state
  }
}
