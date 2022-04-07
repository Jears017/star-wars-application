import React from 'react'
import { Box, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { Link } from 'react-router-dom'
import { ROOT_PATH } from '@/constants/paths'

const useStyles = makeStyles(theme => ({
  mainContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100vw',
    height: '100vh',
  },
}))

export default function PageNotFound () {
  const classes = useStyles()
  return (
    <Box className={classes.mainContainer}>
      <Box>
        <Typography variant="h4">Page not found!</Typography>
        <Link to={ROOT_PATH}>redirect to main</Link>
      </Box>
    </Box>
  )
}
