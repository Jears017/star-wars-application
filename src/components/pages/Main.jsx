import React from 'react'
import { Box, Typography, Button } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { PLANETS_PAGE_PATH } from '@/constants'

const useStyles = makeStyles(theme => ({
  mainContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100vw',
    height: '100vh',
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
    paddingBottom: theme.spacing(4),
  },
  btn: { width: 300, height: 60, backgroundColor: theme.palette.primary },
}))

export default function Main () {
  const classes = useStyles()
  const { t } = useTranslation()

  return (
    <Box className={classes.mainContainer}>
      <Box>
        <Typography className={classes.mainTitle} variant="h1">
          {t('main.welcome')}
        </Typography>
        <Box className={classes.mainContent}>
          <Link className={classes.mainLink} to={PLANETS_PAGE_PATH}>
            <Button
              className={classes.btn}
              variant="contained"
              size="large"
            >
              {t('main.get_started')}
            </Button>
          </Link>
        </Box>
      </Box>
    </Box>
  )
}
