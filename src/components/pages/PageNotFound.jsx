import React from 'react'
import { Box, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { Link } from 'react-router-dom'
import TravelExploreIcon from '@mui/icons-material/TravelExplore'

import { ROOT_PATH } from '@/constants/paths'

const useStyles = makeStyles(theme => ({
  mainContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100vw',
    height: '100vh',
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
  link: {
    color: theme.palette.text.primary,
  },
  pageNotFoundTextContainer: {
    paddingTop: theme.spacing(4),
  },
}))

export default function PageNotFound () {
  const classes = useStyles()
  return (
    <Box className={classes.mainContainer}>
      <Box>
        <Box className={classes.imageContainer}>
          <TravelExploreIcon className={classes.image} />
        </Box>
        <Box className={classes.pageNotFoundTextContainer}>
          <Typography variant="h3">Page not found!</Typography>
          <Link className={classes.link} to={ROOT_PATH}>
            redirect to main
          </Link>
        </Box>
      </Box>
    </Box>
  )
}
