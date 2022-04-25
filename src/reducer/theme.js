import { SET_THEME } from '@/constants'

const initialState = {
  dark: localStorage.getItem('mode'),
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
