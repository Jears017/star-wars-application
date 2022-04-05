import {
  USER_SIGN_UP_REQUEST,
  USER_LOG_IN_REQUEST,
  USER_RESPONSE,
  USER_RESPONSE_FAIL,
  REMOVE_USER,
} from '@/constants'

const initialState = {
  email: null,
  token: null,
  id: null,
  isLoading: false,
  error: null,
  isLoaded: false,
}

export default function (state = initialState, { type, payload } = {}) {
  switch (type) {
    case USER_SIGN_UP_REQUEST:
      return {
        ...state,
        isLoading: true,
      }
    case USER_LOG_IN_REQUEST:
      return {
        ...state,
        isLoading: true,
      }
    case USER_RESPONSE:
      return {
        ...state,
        isLoading: false,
        isLoaded: true,
        id: payload.id,
        email: payload.email,
        token: payload.token,
        count: payload.count,
      }
    case USER_RESPONSE_FAIL:
      return { ...state, isLoading: false, error: payload }
    case REMOVE_USER:
      return { email: null, token: null, id: null }
    default:
      return state
  }
}
