import React from 'react'
import { Box, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles(theme => ({
  mainContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
}))

export default function Main () {
  const classes = useStyles()
  return (
    <Box className={classes.mainContainer}>
      <Typography variant="h1">Star Wars Application!</Typography>
    </Box>
  )
}
