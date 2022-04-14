import React from 'react'
import { Box, Typography } from '@mui/material'
import { Link, useHistory } from 'react-router-dom'
import { makeStyles } from '@mui/styles'
import { useTranslation } from 'react-i18next'
import { useAuthState } from 'react-firebase-hooks/auth'

import { LOGIN_PAGE_PATH, ROOT_PATH } from '@/constants'
import { AuthForm } from '@/components/forms/AuthForm'
import auth, { registerWithEmailAndPassword } from '@/firebase'

const useStyles = makeStyles(theme => ({
  registerWrapper: {
    height: '100vh',
    width: '100vw',
    paddingTop: theme.spacing(10),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  registerContent: {
    border: `1px solid ${theme.palette.text.primary}`,
    padding: '70px 20px',
    [theme.breakpoints.down('lg')]: {
      padding: '60px 20px',
    },
    borderRadius: theme.custom.threeBorderRadius,
    [theme.breakpoints.down('md')]: {
      padding: '40px 20px',
    },
    boxShadow: '-moz-initial,',
  },
  link: {
    paddingTop: theme.spacing(3),
  },
}))

export const RegisterPage = () => {
  const classes = useStyles()
  const { t } = useTranslation()

  const navigate = useHistory()

  const [user] = useAuthState(auth)

  const handleRegister = (email, password) => {
    registerWithEmailAndPassword(email, password)
  }

  if (user) {
    navigate.push(ROOT_PATH)
  }
  return (
    <Box className={classes.registerWrapper}>
      <Box className={classes.registerContent}>
        <Typography variant="h3">{t('auth.sign_up')}</Typography>
        <AuthForm title={t('auth.sign_up')} handleClick={handleRegister} />
        <Typography className={classes.link}>{t('auth.have_account')} <Link to={LOGIN_PAGE_PATH}>{t('auth.log_in')}</Link></Typography>
      </Box>
    </Box>
  )
}
