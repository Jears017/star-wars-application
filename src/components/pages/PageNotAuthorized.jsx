import React from 'react'
import { Box, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import CancelIcon from '@mui/icons-material/Cancel'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { LOGIN_PAGE_PATH } from '@/constants/paths'

const useStyles = makeStyles(theme => ({
  mainContainer: {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  image: {
    width: '200px',
    height: '200px',
    [theme.breakpoints.down('sm')]: {
      width: '150px',
      height: '150px',
    },
  },
  pageNotAuthorizedTextContainer: {
    paddingTop: theme.spacing(4),
  },
  link: {
    color: theme.palette.text.primary,
  },
}))

export const PageNotAuthorized = () => {
  const classes = useStyles()
  const { t } = useTranslation()

  return (
    <Box className={classes.mainContainer}>
      <Box className={classes.mainContent}>
        <Box>
          <Box className={classes.imageContainer}>
            <CancelIcon className={classes.image} />
          </Box>
          <Box className={classes.pageNotAuthorizedTextContainer}>
            <Typography variant="h3">{t('auth.not_authorized')}</Typography>
            <Typography variant="body1">
              {t('auth.not_auth_description')}{' '}
              <Link className={classes.link} to={LOGIN_PAGE_PATH}>{t('auth.authorized')}</Link>
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
