import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
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

export default function MediaCard () {
  const classes = useStyles()
  return (
    <Card className={classes.cardWrapper}>
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
    </Card>
  )
}
