import { Box, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { makeStyles } from '@mui/styles'

import { filmsDetailsRequest } from '@/actions'

import {
  FILMS_IMAGE_URL,
  CHARACTERS_IMAGE_URL,
  CHARACTERS_PAGE_PATH,
  PLANETS_PAGE_PATH,
  PLANETS_IMAGE_URL,
} from '@/constants'

import AdditionalInfo from '@/components/blocks/AdditionalInfo'

const useStyles = makeStyles(theme => ({
  filmContainer: { display: 'flex', justifyContent: 'center' },
  filmContent: { display: 'flex' },
  filmContentDetails: { maxWidth: 600 },
  filmImageContainer: { marginRight: 25 },
  filmImage: { borderRadius: '5%', width: 400, height: 400 },
  filmAdditionalWrapper: { display: 'flex', mt: 5, gap: 5 },
}))

export default function Film () {
  const classes = useStyles()

  const { id } = useParams()
  const { data, characters, planets } = useSelector(
    state => state.filmsDetails,
  )
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(filmsDetailsRequest(id))
  }, [])

  return (
    <Box className={classes.filmContainer}>
      <Box>
        <Box className={classes.filmContent}>
          <Box className={classes.filmImageContainer}>
            <img
              src={`${FILMS_IMAGE_URL}${id}.jpg`}
              alt={data.name}
              className={classes.filmImage}
            />
          </Box>
          <Box className={classes.filmContentDetails}>
            <Typography variant="h2">{data.title || 'uknown'}</Typography>
            <Typography variant="h6">
              Date Created: {data.release_date || 'uknown'}
            </Typography>
            <Typography variant="h6">
              Director: {data.director || 'uknown'}
            </Typography>
            <Typography variant="h6">
              Producer(s): {data.producer || 'uknown'}cm
            </Typography>
            <Typography variant="h6">Opening Crawl:</Typography>
            <Typography>{data.opening_crawl || 'uknown'}</Typography>
          </Box>
        </Box>
        <Box className={classes.filmAdditionalWrapper}>
          <AdditionalInfo
            data={characters}
            path={CHARACTERS_PAGE_PATH}
            img={CHARACTERS_IMAGE_URL}
            title="Characters:"
          />
          <AdditionalInfo
            data={planets}
            path={PLANETS_PAGE_PATH}
            img={PLANETS_IMAGE_URL}
            title="Planets:"
          />
        </Box>
      </Box>
    </Box>
  )
}
