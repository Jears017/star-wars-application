import React from 'react'
import { Box, Typography } from '@mui/material'
import { Link, useHistory } from 'react-router-dom'
import { makeStyles } from '@mui/styles'
import { useTranslation } from 'react-i18next'
import { useAuthState } from 'react-firebase-hooks/auth'

import { REGISTER_PAGE_PATH, ROOT_PATH } from '@/constants'
import { AuthForm } from '@/components/forms/AuthForm'
import auth, { logInWithEmailAndPassword } from '@/firebase'

const useStyles = makeStyles(theme => ({
  logInWrapper: {
    height: '100vh',
    width: '100vw',
    paddingTop: theme.spacing(10),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logInContent: {
    border: `1px solid ${theme.palette.text.primary}`,
    padding: '70px 20px',
    borderRadius: theme.custom.threeBorderRadius,
    [theme.breakpoints.down('lg')]: {
      padding: '60px 20px',
    },
    [theme.breakpoints.down('md')]: {
      padding: '40px 20px',
    },
  },
  link: {
    paddingTop: theme.spacing(3),
  },
}))

export const LoginPage = () => {
  const classes = useStyles()
  const { t } = useTranslation()

  const [user] = useAuthState(auth)

  const navigate = useHistory()

  const handleLogin = (email, password) => {
    logInWithEmailAndPassword(email, password)
  }

  if (user) {
    navigate.push(ROOT_PATH)
  }
  return (
    <Box className={classes.logInWrapper}>
      <Box className={classes.logInContent}>
        <Typography variant="h3">{t('auth.log_in')}</Typography>
        <AuthForm title={t('auth.log_in')} handleClick={handleLogin} />
        <Typography className={classes.link}>{t('auth.dont_have_account')} <Link to={REGISTER_PAGE_PATH}>{t('auth.sign_up')}</Link></Typography>
      </Box>
    </Box>
  )
}
