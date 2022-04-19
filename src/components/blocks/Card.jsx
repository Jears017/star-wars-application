import React from 'react'

import {
  Card as MuiCard,
  CardContent,
  Typography,
  Box,
} from '@mui/material'

import { makeStyles } from '@mui/styles'

import PropTypesOfCard from '@/prop-types/PropTypesOfCard'

const useStyles = makeStyles(theme => ({
  cardWrapper: {
    width: 345,
    [theme.breakpoints.down('sm')]: {
      width: 320,
    },
  },
  cardMediaContainer: {
    height: 250,
  },
  cardLink: {
    textDecoration: 'none',
    color: theme.palette.text.primary,
  },
  cardImg: {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
  },
}))

export default function Card ({ name, imageUrl, id, title, pathUrl }) {
  const classes = useStyles()
  return (
    <MuiCard className={classes.cardWrapper}>
      <Box className={classes.cardMediaContainer}>
        <img className={classes.cardImg} src={imageUrl} />
      </Box>
      <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
          >
            {name || title}
          </Typography>
      </CardContent>
    </MuiCard>
  )
}

Card.propTypes = PropTypesOfCard
