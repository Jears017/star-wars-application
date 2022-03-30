import { Box, Typography, IconButton } from '@mui/material'
import React, { useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { makeStyles } from '@mui/styles'
import { useTranslation } from 'react-i18next'
import ReactToPrint from 'react-to-print'
import PrintIcon from '@mui/icons-material/Print'
import WestIcon from '@mui/icons-material/West'

import AdditionalInfo from '@/components/blocks/AdditionalInfo'
import { planetsDetailsRequest } from '@/actions'

import {
  PLANETS_IMAGE_URL,
  FILMS_PAGE_PATH,
  CHARACTERS_PAGE_PATH,
  CHARACTERS_IMAGE_URL,
  FILMS_IMAGE_URL,
} from '@/constants'

const useStyles = makeStyles(theme => ({
  planetContainer: {
    display: 'flex',
    justifyContent: 'center',
    paddingTop: theme.spacing(4),
  },
  planet: {
    paddingTop: theme.spacing(12),
  },
  planetPrintButtonContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  planetContent: {
    display: 'flex',
    justifyContent: 'space-around',
    border: `1px solid ${theme.palette.common.black}`,
    borderRadius: theme.custom.threeBorderRadius,
    color: theme.palette.common.white,
    backgroundColor: theme.palette.background.paper,
    [theme.breakpoints.down('sm')]: {
      display: 'block',
    },
  },
  planetImageContainer: {
    [theme.breakpoints.down('md')]: {
      display: 'flex',
      justifyContent: 'center',
    },
  },
  planetImage: {
    borderRadius: theme.custom.threeBorderRadius,
    width: 345,
    [theme.breakpoints.down('sm')]: {
      width: 255,
    },
  },
  planetsDetailsWrapper: {
    display: 'flex',
    mt: 5,
    gap: 20,
    flexWrap: 'wrap',
    justifyContent: 'center',
    paddingTop: theme.spacing(2),
  },
  planetsTitle: {
    fontSize: 60,
    color: '#1111111111',
    [theme.breakpoints.down('md')]: {
      fontSize: 50,
    },
  },
  planetDescription: {
    [theme.breakpoints.down('sm')]: {
      paddingTop: theme.spacing(1),
    },
  },
}))

export default function Planet () {
  const classes = useStyles()
  const { t } = useTranslation()

  const { id } = useParams()
  const { data, films, residents } = useSelector(state => state.planetsDetails)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(planetsDetailsRequest(id))
  }, [])

  let componentRef = useRef(null)

  return (
    <Box className={classes.planet}>
      <Box className={classes.planetPrintButtonContainer}>
        <Box>
          <WestIcon />
        </Box>
        <ReactToPrint
          trigger={() => (
            <IconButton>
              <PrintIcon />
            </IconButton>
          )}
          content={() => componentRef}
        />
      </Box>
      <Box
        ref={el => (componentRef = el)}
        className={classes.planetContainer}
      >
        <Box>
          <Box>
            <Box className={classes.planetContent}>
              <Box className={classes.planetImageContainer}>
                <img
                  src={`${PLANETS_IMAGE_URL}${id}.jpg`}
                  alt={data.name}
                  className={classes.planetImage}
                />
              </Box>
              <Box className={classes.planetDescription}>
                <Box>
                  <Typography variant="h3" className={classes.planetsTitle}>
                    {data.name}
                  </Typography>
                  <Typography variant="h6">
                    {t('planet.population')}: {data.population}
                  </Typography>
                  <Typography variant="h6">
                    {t('planet.rotation_period')}: {data.rotation_period}{' '}
                    {t('common.days')}
                  </Typography>
                  <Typography variant="h6">
                    {t('planet.orbital_period')}: {data.orbital_period}{' '}
                    {t('common.days')}
                  </Typography>
                  <Typography variant="h6">
                    {t('planet.diameter')}: {data.diameter}
                    {t('common.km')}
                  </Typography>
                  <Typography variant="h6">
                    {t('planet.gravity')}: {data.gravity}
                  </Typography>
                  <Typography variant="h6">
                    {t('planet.terrain')}: {data.terrain}
                  </Typography>
                  <Typography variant="h6">
                    {t('planet.surface_water')}: {data.surface_water}%
                  </Typography>
                  <Typography variant="h6">
                    {t('planet.climate')}: {data.climate}
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box className={classes.planetsDetailsWrapper}>
              <AdditionalInfo
                data={films}
                path={FILMS_PAGE_PATH}
                img={FILMS_IMAGE_URL}
                title={t('common.related_films')}
              />
              <AdditionalInfo
                data={residents}
                path={CHARACTERS_PAGE_PATH}
                img={CHARACTERS_IMAGE_URL}
                title={t('common.residents')}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
