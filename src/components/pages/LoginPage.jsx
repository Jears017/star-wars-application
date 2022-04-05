import React from 'react'
import { Box, Typography } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { makeStyles } from '@mui/styles'
import { useTranslation } from 'react-i18next'

import { REGISTER_PAGE_PATH } from '@/constants/paths'
import { Form } from '@/components/forms/Form'
import { userLogInRequest } from '@/actions'
import { useAuth } from '@/hooks/useAuth'

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
    padding: theme.spacing(10),
    borderRadius: theme.custom.threeBorderRadius,
  },
}))

export const LoginPage = () => {
  const classes = useStyles()
  const { t } = useTranslation()
  const dispatch = useDispatch()

  const navigate = useNavigate()

  const handleLogin = (email, password) => {
    dispatch(userLogInRequest(email, password))
  }

  const { token } = useAuth()

  if (token) {
    navigate('/')
  }
  return (
    <Box className={classes.logInWrapper}>
      <Box className={classes.logInContent}>
        <Typography variant="h3">{t('auth.log_in')}</Typography>
        <Form title={t('auth.log_in')} handleClick={handleLogin} />
        <Link to={REGISTER_PAGE_PATH}>{t('auth.sign_up')}</Link>
      </Box>
    </Box>
  )
}
