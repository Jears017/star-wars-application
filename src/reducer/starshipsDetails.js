import {
  STARSHIPS_DETAILS_REQUEST,
  STARSHIPS_DETAILS_RESPONSE,
  STARSHIPS_DETAILS_RESPONSE_FAIL,
} from '@/constants'

const initialState = {
  isLoading: false,
  isLoaded: false,
  data: {},
  id: null,
  error: null,
  isInitialized: false,
  films: [],
  pilots: [],
}

export default function (state = initialState, { type, payload } = {}) {
  switch (type) {
    case STARSHIPS_DETAILS_REQUEST:
      return {
        ...state,
        isLoading: true,
        id: payload,
      }
    case STARSHIPS_DETAILS_RESPONSE:
      return {
        ...state,
        isLoading: false,
        isLoaded: true,
        data: { ...payload },
        films: [...payload.films],
        pilots: [...payload.pilots],
      }
    case STARSHIPS_DETAILS_RESPONSE_FAIL:
      return { ...state, isLoading: false, error: payload }
    default:
      return state
  }
}
