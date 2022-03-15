import {
  FILMS_REQUEST,
  FILMS_RESPONSE,
  FILMS_RESPONSE_FAIL,
} from '@/constants'

const initialState = {
  isLoading: false,
  isLoaded: false,
  filmsList: [],
  error: null,
  isInitialized: false,
  page: 1,
  search: '',
  count: null,
}

export default function (state = initialState, { type, payload } = {}) {
  switch (type) {
    case FILMS_REQUEST:
      return {
        ...state,
        isLoading: true,
        page: payload.page,
        search: payload.search,
      }
    case FILMS_RESPONSE:
      return {
        ...state,
        isLoading: false,
        isLoaded: true,
        filmsList: [...payload.results],
        count: payload.count,
      }
    case FILMS_RESPONSE_FAIL:
      return { ...state, isLoading: false, error: payload }
    default:
      return state
  }
}
