import React from 'react'
import {
  Card as MuiCard,
  CardMedia as MediaCard,
  CardContent,
  Typography,
  Box,
} from '@mui/material'
import { makeStyles } from '@mui/styles'
import { Link } from 'react-router-dom'

import PropTypesOfCard from '@/prop-types/PropTypesOfCard'

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
      {/* <MediaCard
        className={classes.cardMediaContainer}
        component="img"
        image={imageUrl}
        alt={name}
  /> */}
      <Box className={classes.cardMediaContainer}>
        <img className={classes.cardImg} src={imageUrl} />
      </Box>
      <CardContent>
        <Link className={classes.cardLink} to={`${pathUrl}/${id}`}>
          <Typography gutterBottom variant="h5"
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
