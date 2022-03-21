import { Box, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { makeStyles } from '@mui/styles'

import { starshipsDetailsRequest } from '@/actions'

import {
  STARSHIPS_IMAGE_URL,
  FILMS_PAGE_PATH,
  FILMS_IMAGE_URL,
  CHARACTERS_IMAGE_URL,
  CHARACTERS_PAGE_PATH,
} from '@/constants'

import AdditionalInfo from '@/components/blocks/AdditionalInfo'

const useStyles = makeStyles(theme => ({
  starshipContainer: { display: 'flex', justifyContent: 'center' },
  starshipContent: { display: 'flex' },
  starshipImageContainer: { marginRight: 25 },
  starshipImage: { borderRadius: '5%', width: 400, height: 400 },
  starshipAdditionalWrapper: { display: 'flex', mt: 5, gap: 5 },
}))

export default function Planet () {
  const classes = useStyles()

  const { id } = useParams()
  const { data, films, pilots } = useSelector(
    state => state.starshipsDetails,
  )
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(starshipsDetailsRequest(id))
  }, [])

  return (
    <Box className={classes.starshipContainer}>
      <Box>
        <Box className={classes.starshipContent}>
          <Box className={classes.starshipImageContainer}>
            <img
              src={`${STARSHIPS_IMAGE_URL}${id}.jpg`}
              alt={data.name}
              className={classes.starshipImage}
            />
          </Box>
          <Box>
            <Typography variant="h2">{data.name}</Typography>
            <Typography variant="h6">Model: {data.model}</Typography>
            <Typography variant="h6">
              Manufacturer: {data.manufacturer}
            </Typography>
            <Typography variant="h6">Class: {data.starship_class}</Typography>
            <Typography variant="h6">
              Cost: {data.cost_in_credits} credits
            </Typography>
            <Typography variant="h6">
              Speed: {data.max_atmosphering_speed} km/h
            </Typography>
            <Typography variant="h6">
              Hyperdrive Rating: {data.hyperdrive_rating}
            </Typography>
            <Typography variant="h6">MGLT: {data.MGLT}%</Typography>
            <Typography variant="h6">Length: {data.length}</Typography>
            <Typography variant="h6">
              Cargo Capacity: {data.cargo_capacity}
            </Typography>
            <Typography variant="h6">Mimimum Crew: {data.crew}</Typography>
            <Typography variant="h6">Passengers: {data.passengers}</Typography>
          </Box>
        </Box>
        <Box className={classes.starshipAdditionalWrapper}>
          <AdditionalInfo
            data={films}
            path={FILMS_PAGE_PATH}
            img={FILMS_IMAGE_URL}
            title="Related films:"
          />
          <AdditionalInfo
            data={pilots}
            path={CHARACTERS_PAGE_PATH}
            img={CHARACTERS_IMAGE_URL}
            title="Pilots:"
          />
        </Box>
      </Box>
    </Box>
  )
}
