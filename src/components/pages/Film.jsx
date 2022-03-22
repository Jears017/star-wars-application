import { Box, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { makeStyles } from '@mui/styles'
import { useTranslation } from 'react-i18next'

import { filmsDetailsRequest } from '@/actions'
import AdditionalInfo from '@/components/blocks/AdditionalInfo'

import {
  FILMS_IMAGE_URL,
  CHARACTERS_IMAGE_URL,
  CHARACTERS_PAGE_PATH,
  PLANETS_PAGE_PATH,
  PLANETS_IMAGE_URL,
} from '@/constants'

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
  const { t } = useTranslation()

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
            <Typography variant="h2">{data.title}</Typography>
            <Typography variant="h6">
              {t('film.date_created')}: {data.release_date}
            </Typography>
            <Typography variant="h6">
            {t('film.director')}: {data.director}
            </Typography>
            <Typography variant="h6">
            {t('film.producer')}: {data.producer}
            </Typography>
            <Typography variant="h6">{t('film.opening_crawl')}:</Typography>
            <Typography>{data.opening_crawl}</Typography>
          </Box>
        </Box>
        <Box className={classes.filmAdditionalWrapper}>
          <AdditionalInfo
            data={characters}
            path={CHARACTERS_PAGE_PATH}
            img={CHARACTERS_IMAGE_URL}
            title={t('common.characters')}
          />
          <AdditionalInfo
            data={planets}
            path={PLANETS_PAGE_PATH}
            img={PLANETS_IMAGE_URL}
            title={t('common.planets')}
          />
        </Box>
      </Box>
    </Box>
  )
}
