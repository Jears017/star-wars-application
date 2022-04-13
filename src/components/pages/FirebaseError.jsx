import React from 'react'
import { Box, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import CableIcon from '@mui/icons-material/Cable'

const useStyles = makeStyles(theme => ({
  mainContainer: {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  image: {
    width: '200px',
    height: '200px',
    [theme.breakpoints.down('sm')]: {
      width: '150px',
      height: '150px',
    },
  },
  description: {
    display: 'flex',
    justifyContent: 'center',
  },
}))

export const FirebaseError = () => {
  const classes = useStyles()
  return (
    <Box className={classes.mainContainer}>
      <Box className={classes.mainContent}>
        <Box>
          <Box className={classes.imageContainer}>
            <CableIcon className={classes.image} />
          </Box>
          <Typography variant="h3">Firebase is not available!</Typography>
          <Typography
            className={classes.description}
            variant="body2"
          >
            Check your connection
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}
