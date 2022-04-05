import React, { useEffect } from 'react'
import { Box, Typography, Button } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { Link, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { PLANETS_PAGE_PATH } from '@/constants'
import { useAuth } from '@/hooks/useAuth'

const useStyles = makeStyles(theme => ({
  mainContainer: {
    display: 'flex',
    justifyContent: 'center',
    paddingTop: theme.spacing(12),
  },
  mainContent: {
    display: 'flex',
    justifyContent: 'center',
  },
  mainLink: {
    textDecoration: 'none',
    fontSize: 37,
  },
  mainTitle: {
    color: theme.palette.text.default,
  },
}))

export default function Main () {
  const classes = useStyles()
  const { t } = useTranslation()

  const { isAuth } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (!isAuth) {
      navigate('/login')
    }
  }, [isAuth])

  return (
    <Box className={classes.mainContainer}>
      <Box>
        <Typography className={classes.mainTitle} variant="h1">
          {t('main.welcome')}
        </Typography>
        <Box className={classes.mainContent}>
          <Link className={classes.mainLink} to={PLANETS_PAGE_PATH}>
            <Button variant="contained" size="large">
              {t('main.nameOfButton')}
            </Button>
          </Link>
        </Box>
      </Box>
    </Box>
  )
}
