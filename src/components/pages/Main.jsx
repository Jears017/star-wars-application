import React from 'react'
import { Box, Typography, Button } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { Link } from 'react-router-dom'

import { PLANETS_PAGE_PATH } from '@/constants'

const useStyles = makeStyles(theme => ({
  mainContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  mainContent: {
    display: 'flex',
    justifyContent: 'center',
  },
  mainLink: {
    textDecoration: 'none',
    fontSize: 37,
  },
}))

export default function Main () {
  const classes = useStyles()
  return (
    <Box className={classes.mainContainer}>
      <Box>
        <Typography variant="h1">Star Wars Application!</Typography>
        <Box className={classes.mainContent}>
          <Link className={classes.mainLink} to={PLANETS_PAGE_PATH}>
            <Button variant="contained" size="large">
              Get Started
            </Button>
          </Link>
        </Box>
      </Box>
    </Box>
  )
}
