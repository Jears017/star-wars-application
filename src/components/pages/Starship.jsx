import { Box, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { makeStyles } from '@mui/styles'
import { useTranslation } from 'react-i18next'

import { starshipsDetailsRequest } from '@/actions'
import AdditionalInfo from '@/components/blocks/AdditionalInfo'

import {
  STARSHIPS_IMAGE_URL,
  FILMS_PAGE_PATH,
  FILMS_IMAGE_URL,
  CHARACTERS_IMAGE_URL,
  CHARACTERS_PAGE_PATH,
} from '@/constants'

const useStyles = makeStyles(theme => ({
  starshipContainer: {
    display: 'flex',
    justifyContent: 'center',
    paddingTop: theme.spacing(12),
  },
  starshipContent: {
    display: 'flex',
    justifyContent: 'space-around',
    border: `1px solid ${theme.palette.common.black}`,
    borderRadius: '10px',
    color: theme.palette.common.white,
    backgroundColor: theme.palette.background.paper,
    [theme.breakpoints.down('sm')]: {
      display: 'block',
    },
  },
  starshipImageContainer: {
    [theme.breakpoints.down('md')]: {
      display: 'flex',
      justifyContent: 'center',
    },
  },
  starshipImage: {
    borderRadius: '5%',
    width: 345,
    [theme.breakpoints.down('sm')]: {
      width: 255,
    },
  },
  starshipAdditionalWrapper: {
    display: 'flex',
    mt: 5,
    gap: 20,
    flexWrap: 'wrap',
    justifyContent: 'center',
    paddingTop: theme.spacing(2),
  },
}))

export default function Starship () {
  const classes = useStyles()
  const { t } = useTranslation()

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
            <Typography variant="h6">{t('starship.model')}: {data.model}</Typography>
            <Typography variant="h6">
            {t('starship.manufacturer')}: {data.manufacturer}
            </Typography>
            <Typography variant="h6">{t('starship.class')}: {data.starship_class}</Typography>
            <Typography variant="h6">
            {t('starship.cost')}: {data.cost_in_credits} {t('common.credits')}
            </Typography>
            <Typography variant="h6">
            {t('starship.speed')}: {data.max_atmosphering_speed} {t('common.kmH')}
            </Typography>
            <Typography variant="h6">
            {t('starship.hyperdrive_rating')}: {data.hyperdrive_rating}
            </Typography>
            <Typography variant="h6">{t('starship.MGLT')}: {data.MGLT}%</Typography>
            <Typography variant="h6">{t('starship.length')}: {data.length} {t('common.m')}</Typography>
            <Typography variant="h6">
            {t('starship.cargo_capacity')}: {data.cargo_capacity} {t('common.kg')}
            </Typography>
            <Typography variant="h6">{t('starship.minimum_сrew')}: {data.crew}</Typography>
            <Typography variant="h6">{t('starship.passengers')}: {data.passengers}</Typography>
          </Box>
        </Box>
        <Box className={classes.starshipAdditionalWrapper}>
          <AdditionalInfo
            data={films}
            path={FILMS_PAGE_PATH}
            img={FILMS_IMAGE_URL}
            title={t('common.related_films')}
          />
          <AdditionalInfo
            data={pilots}
            path={CHARACTERS_PAGE_PATH}
            img={CHARACTERS_IMAGE_URL}
            title={t('common.pilots')}
          />
        </Box>
      </Box>
    </Box>
  )
}
