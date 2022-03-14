import {
  STARSHIPS_REQUEST,
  STARSHIPS_RESPONSE,
  STARSHIPS_RESPONSE_FAIL,
} from '@/constants'

const initialState = {
  isLoading: false,
  isLoaded: false,
  starshipsList: [],
  error: null,
  isInitialized: false,
  page: 1,
  count: null,
}

export default function (state = initialState, { type, payload } = {}) {
  switch (type) {
    case STARSHIPS_REQUEST:
      return { ...state, isLoading: true, page: payload }
    case STARSHIPS_RESPONSE:
      return {
        ...state,
        isLoading: false,
        isLoaded: true,
        starshipsList: [...payload.results],
        count: payload.count,
      }
    case STARSHIPS_RESPONSE_FAIL:
      return { ...state, isLoading: false, error: payload }
    default:
      return state
  }
}
