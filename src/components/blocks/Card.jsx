import React from 'react'
import { Card as MuiCard, CardMedia as MediaCard, CardContent, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { Link } from 'react-router-dom'

import PropTypesOfCard from '@/prop-types/PropTypesOfCard'
import { CARD_DETAILS_PAGE_PATH } from '@/constants'

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

export default function Card ({ name, imageUrl, id, title }) {
  const classes = useStyles()
  return (
    <MuiCard className={classes.cardWrapper}>
      <MediaCard
        className={classes.cardMediaContainer}
        component="img"
        image={imageUrl}
        alt={name}
      />
      <CardContent>
        <Link className={classes.cardLink} to={`${CARD_DETAILS_PAGE_PATH}/${name || title}/${id}`}>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
          >
            {name || title}
          </Typography>
        </Link>
      </CardContent>
    </MuiCard>
  )
}

Card.propTypes = PropTypesOfCard
