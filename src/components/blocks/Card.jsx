import React from 'react'
import { Card as MuiCard, CardContent, CardMedia, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { Link } from 'react-router-dom'

import PropTypesListOfCard from '@/prop-types/PropTypesListOfCard'

const useStyles = makeStyles(theme => ({
  cardWrapper: {
    width: 345,
  },
  cardMediaContainer: {
    height: 250,
  },
  cardLink: {
    textDecoration: 'none',
    color: theme.palette.common.white,
  },
}))

export default function Card ({ name, imageUrl }) {
  const classes = useStyles()
  return (
    <MuiCard className={classes.cardWrapper}>
      <CardMedia
        className={classes.cardMediaContainer}
        component="img"
        image={ imageUrl }
        alt={name}
      />
      <CardContent>
        <Link className={classes.cardLink} to={`/${name}`}>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
          >
            {name}
          </Typography>
        </Link>
      </CardContent>
    </MuiCard>
  )
}

Card.propTypes = PropTypesListOfCard
