import { Box, Typography, IconButton } from '@mui/material'
import React, { useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams, useHistory } from 'react-router-dom'
import { makeStyles } from '@mui/styles'
import { useTranslation } from 'react-i18next'
import ReactToPrint from 'react-to-print'
import PrintIcon from '@mui/icons-material/Print'
import WestIcon from '@mui/icons-material/West'

import { charactersDetailsRequest } from '@/actions'
import AdditionalInfo from '@/components/blocks/AdditionalInfo'
import { Spinner } from '@/components/blocks/Preloader'
import { useNameFromApi } from '@/hooks/useNameFromApi'

import {
  CHARACTERS_IMAGE_URL,
  FILMS_PAGE_PATH,
  FILMS_IMAGE_URL,
  STARSHIPS_IMAGE_URL,
  STARSHIPS_PAGE_PATH,
} from '@/constants'

const useStyles = makeStyles(theme => ({
  characterContainer: {
    display: 'flex',
    justifyContent: 'center',
    paddingTop: theme.spacing(4),
  },
  character: {
    paddingTop: theme.spacing(12),
  },
  characterPrintButtonContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  characterContent: {
    display: 'flex',
    justifyContent: 'space-around',
    borderRadius: theme.custom.threeBorderRadius,
    color: theme.palette.text.primary,
    backgroundColor: theme.custom.background.main,
    [theme.breakpoints.down('sm')]: {
      display: 'block',
    },
  },
  characterImageContainer: {
    [theme.breakpoints.down('md')]: {
      display: 'flex',
      justifyContent: 'center',
    },
  },
  characterImage: {
    borderRadius: theme.custom.threeBorderRadius,
    width: 345,
    height: '100%',
    [theme.breakpoints.down('sm')]: {
      width: 255,
    },
  },
  characterDetailsWrapper: {
    display: 'flex',
    mt: 5,
    gap: 20,
    flexWrap: 'wrap',
    justifyContent: 'center',
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

export default function Character () {
  const classes = useStyles()
  const { t } = useTranslation()
  const navigate = useHistory()

  const { id } = useParams()
  const { data, films, starships, isLoading } = useSelector(
    state => state.charactersDetails,
  )

  const homeWorld = useNameFromApi(data.homeworld)
  const species = useNameFromApi(data.species)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(charactersDetailsRequest(id))
  }, [])

  let characterComponentRef = useRef(null)

  if (isLoading) {
    return <Spinner />
  }
  return (
    <Box className={classes.character}>
      <Box className={classes.characterPrintButtonContainer}>
        <Box
          onClick={() => navigate.goBack()}
          className={classes.planetGoBackButton}
        >
          <WestIcon />
          <Typography className={classes.planetGoBackText}>
            {t('common.goBack')}
          </Typography>
        </Box>
        <ReactToPrint
          trigger={() => (
            <IconButton>
              <PrintIcon />
            </IconButton>
          )}
          content={() => characterComponentRef}
        />
      </Box>
      <Box
        ref={el => (characterComponentRef = el)}
        className={classes.characterContainer}
      >
        <Box>
          <Box>
            <Box className={classes.characterContent}>
              <Box className={classes.characterImageContainer}>
                <img
                  src={`${CHARACTERS_IMAGE_URL}${id}.jpg`}
                  alt={data.name}
                  className={classes.characterImage}
                />
              </Box>
              <Box>
                <Typography variant="h2">{data.name}</Typography>
                <Typography variant="h6">
                  {t('character.birth_year')}: {data.birth_year}
                </Typography>
                <Typography variant="h6">
                  {t('character.species')}:{' '}
                  {species}
                </Typography>
                <Typography variant="h6">
                  {t('character.height')}: {data.height}
                  {t('common.cm')}
                </Typography>
                <Typography variant="h6">
                  {t('character.mass')}: {data.mass}
                  {t('common.kg')}
                </Typography>
                <Typography variant="h6">
                  {t('character.gender')}: {data.gender}
                </Typography>
                <Typography variant="h6">
                  {t('character.hair_color')}: {data.hair_color}
                </Typography>
                <Typography variant="h6">
                  {t('character.skin_color')}: {data.skin_color}
                </Typography>
                <Typography variant="h6">
                  {t('character.homeworld')}: {homeWorld}
                </Typography>
              </Box>
            </Box>
            <Box className={classes.characterDetailsWrapper}>
              <AdditionalInfo
                data={films}
                path={FILMS_PAGE_PATH}
                img={FILMS_IMAGE_URL}
                title={t('common.related_films')}
              />
              <AdditionalInfo
                data={starships}
                path={STARSHIPS_PAGE_PATH}
                img={STARSHIPS_IMAGE_URL}
                title={t('common.starships')}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
