import { SET_PLANETS } from '@/constants'

const initialState = {
  planetsList: [],
}

export default function (state = initialState, { type, payload } = {}) {
  switch (type) {
    case SET_PLANETS:
      return { ...state, planetsList: [...payload] }
    default:
      return state
  }
}
