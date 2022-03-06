import { SET_PLANETS, GET_PLANETS } from '@/constants/actions'

export const getPlanets = () => {
  return { type: GET_PLANETS }
}

export const setPlanets = planets => {
  return {
    type: SET_PLANETS,
    payload: planets,
  }
}
