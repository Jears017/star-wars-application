import React from 'react'
import { Box, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { Link } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
  mainContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}))

export default function PageNotFound () {
  const classes = useStyles()
  return (
    <Box className={classes.mainContainer}>
      <Box>
        <Typography variant="h4">Page not found!</Typography>
        <Link to={'/'}>redirect to main</Link>
      </Box>
    </Box>
  )
}
