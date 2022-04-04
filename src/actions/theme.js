import { SET_THEME } from '@/constants/actions'

export const setTheme = theme => {
  return { type: SET_THEME, payload: theme }
}
