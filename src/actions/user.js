import {
  USER_SIGN_UP_REQUEST,
  USER_LOG_IN_REQUEST,
  USER_RESPONSE,
  USER_RESPONSE_FAIL,
} from '@/constants/actions'

export const userSignUpRequest = (email, password) => {
  return { type: USER_SIGN_UP_REQUEST, payload: { email, password } }
}

export const userLogInRequest = (email, password) => {
  return { type: USER_LOG_IN_REQUEST, payload: { email, password } }
}

export const userResponse = user => {
  return { type: USER_RESPONSE, payload: user }
}

export const userResponseFail = error => {
  return { type: USER_RESPONSE_FAIL, payload: error }
}
