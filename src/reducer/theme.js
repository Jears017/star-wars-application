import { SET_THEME } from '@/constants'

const initialState = {
  dark: false,
}

export default function (state = initialState, { type, payload } = {}) {
  switch (type) {
    case SET_THEME:
      return {
        ...state,
        dark: payload,
      }
    default:
      return state
  }
}
