import { Box, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { makeStyles } from '@mui/styles'

import { planetsDetailsRequest } from '@/actions'
import { PLANETS_IMAGE_URL } from '@/constants'

const useStyles = makeStyles(theme => ({
  planetContainer: { display: 'flex', justifyContent: 'center' },
  planetContent: { display: 'flex' },
  planetImageContainer: { marginRight: 25 },
  planetImage: { borderRadius: '5%', width: 400, height: 400 },
}))

export default function Planet () {
  const classes = useStyles()

  const { id } = useParams()
  const { data } = useSelector(state => state.planetsDetails)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(planetsDetailsRequest(id))
  }, [])

  return (
    <Box className={classes.planetContainer}>
      <Box>
        <Box className={classes.planetContent}>
          <Box className={classes.planetImageContainer}>
            <img
              src={`${PLANETS_IMAGE_URL}${id}.jpg`}
              alt={data.name}
              className={classes.planetImage}
            />
          </Box>
          <Box>
            <Typography variant="h2">
              {data.name}
            </Typography>
            <Typography variant="h6">
              Population: {data.population}
            </Typography>
            <Typography variant="h6">
              Rotation Period: {data.rotation_period} days
            </Typography>
            <Typography variant="h6">
              Orbital Period: {data.orbital_period} days
            </Typography>
            <Typography variant="h6">
              Diameter: {data.diameter}km
            </Typography>
            <Typography variant="h6">
              Gravity: {data.gravity}
            </Typography>
            <Typography variant="h6">
              Terrain: {data.terrain}
            </Typography>
            <Typography variant="h6">
              Surface Water: {data.surface_water}%
            </Typography>
            <Typography variant="h6">
              Climate: {data.climate}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}