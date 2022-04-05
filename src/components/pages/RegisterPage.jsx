import React from 'react'
import { Box, Typography } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { makeStyles } from '@mui/styles'
import { useTranslation } from 'react-i18next'

import { LOGIN_PAGE_PATH } from '@/constants'
import { Form } from '@/components/forms/Form'
import { userSignUpRequest } from '@/actions'

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

  const dispatch = useDispatch()

  const navigate = useNavigate()

  const handleRegister = (email, password) => {
    dispatch(userSignUpRequest(email, password))
    navigate(LOGIN_PAGE_PATH)
  }
  return (
    <Box className={classes.registerWrapper}>
      <Box className={classes.registerContent}>
        <Typography variant="h3">{t('auth.sign_up')}</Typography>
        <Form title={t('auth.sign_up')} handleClick={handleRegister} />
        <Link to={LOGIN_PAGE_PATH}>{t('auth.log_in')}</Link>
      </Box>
    </Box>
  )
}
