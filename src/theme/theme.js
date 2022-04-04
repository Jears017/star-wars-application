import { createTheme } from '@mui/material/styles'

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
  custom: {
    threeBorderRadius: 12,
  },
})

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
  },
  custom: {
    threeBorderRadius: 12,
  },
})
