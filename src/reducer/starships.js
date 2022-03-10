import { STARSHIPS_REQUEST, STARSHIPS_RESPONSE, STARSHIPS_RESPONSE_FAIL } from '@/constants'

const initialState = {
  isLoading: false,
  isLoaded: false,
  starshipsList: [],
  error: null,
  isInitialized: false,
}

export default function (state = initialState, { type, payload } = {}) {
  switch (type) {
    case STARSHIPS_REQUEST:
      return { ...state, isLoading: true }
    case STARSHIPS_RESPONSE:
      return { ...state, isLoading: false, isLoaded: true, starshipsList: [...payload] }
    case STARSHIPS_RESPONSE_FAIL:
      return { ...state, isLoading: false, error: payload }
    default:
      return state
  }
}
