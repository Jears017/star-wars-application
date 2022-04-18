import React from 'react'
import { CircularProgress, Box } from '@mui/material/'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles(theme => ({
  preloader: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: theme.spacing(12),
  },
}))

export const Spinner = () => {
  const classes = useStyles()
  return (
    <Box className={classes.preloader}>
      <CircularProgress />
    </Box>
  )
}
