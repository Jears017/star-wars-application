import React from 'react'
import { Card as MuiCard, CardContent, CardMedia, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { Link } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
  cardWrapper: {
    maxWidth: 345,
  },
  cardMediaContainer: {
    height: 250,
  },
  cardLink: {
    textDecoration: 'none',
    color: theme.palette.common.white,
  },
}))

export default function Card () {
  const classes = useStyles()
  return (
    <MuiCard className={classes.cardWrapper}>
      <CardMedia
        className={classes.cardMediaContainer}
        component="img"
        image="/static/images/cards/contemplative-reptile.jpg"
      />
      <CardContent>
        <Link className={classes.cardLink} to={'/card'}>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
          >
            Tatoine
          </Typography>
        </Link>
      </CardContent>
    </MuiCard>
  )
}
