import React from 'react'
import { Box, Typography } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
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
    padding: theme.spacing(10),
    borderRadius: theme.custom.threeBorderRadius,
  },
}))

export const RegisterPage = () => {
  const classes = useStyles()
  const { t } = useTranslation()

  const navigate = useNavigate()

  const [user] = useAuthState(auth)

  const handleRegister = (email, password) => {
    registerWithEmailAndPassword(email, password)
  }

  if (user) {
    navigate(ROOT_PATH)
  }
  return (
    <Box className={classes.registerWrapper}>
      <Box className={classes.registerContent}>
        <Typography variant="h3">{t('auth.sign_up')}</Typography>
        <AuthForm title={t('auth.sign_up')} handleClick={handleRegister} />
        <Link to={LOGIN_PAGE_PATH}>{t('auth.log_in')}</Link>
      </Box>
    </Box>
  )
}
