import { createTheme } from '@mui/material/styles'

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
  custom: {
    threeBorderRadius: 12,
  },
  typography: {
    h1: {
      fontSize: '6rem',
      '@media (max-width:1200px)': {
        fontSize: '4rem',
      },
      '@media (max-width:900px)': {
        fontSize: '3rem',
      },
      '@media (max-width:600px)': {
        fontSize: '2rem',
      },
    },
    h3: {
      fontSize: '3rem',
      '@media (max-width:1200px)': {
        fontSize: '2rem',
      },
      '@media (max-width:900px)': {
        fontSize: '2rem',
      },
      '@media (max-width:600px)': {
        fontSize: '1.8rem',
      },
    },
    body1: {
      '@media (max-width:600px)': {
        fontSize: '0.8rem',
      },
      '@media (max-width:370px)': {
        fontSize: '0.7rem',
      },
    },
  },
})

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
  },
  custom: {
    threeBorderRadius: 12,
  },
  typography: {
    h1: {
      fontSize: '6rem',
      '@media (max-width:1200px)': {
        fontSize: '4rem',
      },
      '@media (max-width:900px)': {
        fontSize: '3rem',
      },
      '@media (max-width:600px)': {
        fontSize: '2rem',
      },
    },
    h3: {
      fontSize: '3rem',
      '@media (max-width:1200px)': {
        fontSize: '2rem',
      },
      '@media (max-width:900px)': {
        fontSize: '2rem',
      },
      '@media (max-width:600px)': {
        fontSize: '1.8rem',
      },
    },
    body1: {
      '@media (max-width:600px)': {
        fontSize: '0.8rem',
      },
      '@media (max-width:370px)': {
        fontSize: '0.7rem',
      },
    },
  },
})
