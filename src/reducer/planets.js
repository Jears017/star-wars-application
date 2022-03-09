import { PLANETS_REQUEST, PLANETS_RESPONSE, PLANETS_RESPONSE_FAIL } from '@/constants'

const initialState = {
  isLoading: false,
  isLoaded: false,
  planetsList: [],
  error: null,
  isInitialized: false,
}

export default function (state = initialState, { type, payload } = {}) {
  switch (type) {
    case PLANETS_REQUEST:
      return { ...state, isLoading: true }
    case PLANETS_RESPONSE:
      return { ...state, isLoading: false, isLoaded: true, planetsList: [...payload] }
    case PLANETS_RESPONSE_FAIL:
      return { ...state, isLoading: false, error: payload }
    default:
      return state
  }
}
