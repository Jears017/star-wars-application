import { Box, Typography, IconButton } from '@mui/material'
import React, { useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams, useHistory } from 'react-router-dom'
import { makeStyles } from '@mui/styles'
import { useTranslation } from 'react-i18next'
import ReactToPrint from 'react-to-print'
import PrintIcon from '@mui/icons-material/Print'
import WestIcon from '@mui/icons-material/West'

import { filmsDetailsRequest } from '@/actions'
import AdditionalInfo from '@/components/blocks/AdditionalInfo'
import { Spinner } from '@/components/blocks/Preloader'

import {
  FILMS_IMAGE_URL,
  CHARACTERS_IMAGE_URL,
  CHARACTERS_PAGE_PATH,
  PLANETS_PAGE_PATH,
  PLANETS_IMAGE_URL,
} from '@/constants'

const useStyles = makeStyles(theme => ({
  filmContainer: {
    display: 'flex',
    justifyContent: 'center',
    paddingTop: theme.spacing(4),
  },
  film: {
    paddingTop: theme.spacing(12),
  },
  filmPrintButtonContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  filmContent: {
    display: 'flex',
    justifyContent: 'space-around',
    border: `1px solid ${theme.palette.common.black}`,
    borderRadius: theme.custom.threeBorderRadius,
    color: theme.palette.text.primary,
    backgroundColor: theme.palette.background.paper,
    [theme.breakpoints.down('sm')]: {
      display: 'block',
    },
  },
  filmContentDetails: { maxWidth: 600 },
  filmImageContainer: {
    [theme.breakpoints.down('md')]: {
      display: 'flex',
      justifyContent: 'center',
    },
  },
  filmImage: {
    borderRadius: theme.custom.threeBorderRadius,
    width: 345,
    [theme.breakpoints.down('sm')]: {
      width: 255,
    },
  },
  filmDetailsWrapper: {
    display: 'flex',
    mt: 5,
    gap: 20,
    flexWrap: 'wrap',
    justifyContent: 'center',
    paddingTop: theme.spacing(2),
  },
  planetGoBackButton: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    color: theme.palette.text.primary,
  },
  planetGoBackText: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
}))

export default function Film () {
  const classes = useStyles()
  const { t } = useTranslation()
  const navigate = useHistory()

  const { id } = useParams()
  const { data, characters, planets, isLoading } = useSelector(
    state => state.filmsDetails,
  )
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(filmsDetailsRequest(id))
  }, [])

  let filmComponentRef = useRef(null)

  if (isLoading) {
    return <Spinner />
  }
  return (
    <Box className={classes.film}>
      <Box className={classes.filmPrintButtonContainer}>
        <Box
          onClick={() => navigate.push(-1)}
          className={classes.planetGoBackButton}
        >
          <WestIcon />
          <Typography className={classes.planetGoBackText}>{t('common.goBack')}</Typography>
        </Box>
        <ReactToPrint
          trigger={() => (
            <IconButton>
              <PrintIcon />
            </IconButton>
          )}
          content={() => filmComponentRef}
        />
      </Box>
      <Box
        ref={el => (filmComponentRef = el)}
        className={classes.filmContainer}
      >
        <Box>
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
            <Box className={classes.filmDetailsWrapper}>
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
      </Box>
    </Box>
  )
}
