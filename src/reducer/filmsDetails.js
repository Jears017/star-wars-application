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
      }
    case FILMS_DETAILS_RESPONSE_FAIL:
      return { ...state, isLoading: false, error: payload }
    default:
      return state
  }
}
