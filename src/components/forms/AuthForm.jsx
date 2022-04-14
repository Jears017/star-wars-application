import React, { useState } from 'react'
import { Box, Button, TextField } from '@mui/material'
import pt from 'prop-types'
import { makeStyles } from '@mui/styles'
import { useTranslation } from 'react-i18next'

const useStyles = makeStyles(theme => ({
  textFieldContainer: {
    marginTop: theme.spacing(6),
  },
  textField: {
    minWidth: '400px',
    [theme.breakpoints.down('lg')]: {
      minWidth: '350px',
    },
    [theme.breakpoints.down('sm')]: {
      minWidth: '250px',
    },
  },
  button: {
    marginTop: theme.spacing(6),
  },
  btn: {
    minWidth: '400px',
    [theme.breakpoints.down('lg')]: {
      minWidth: '350px',
    },
    [theme.breakpoints.down('sm')]: {
      minWidth: '250px',
    },
  },
}))

export const AuthForm = ({ title, handleClick }) => {
  const classes = useStyles()
  const { t } = useTranslation()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onSubmitHandler = e => {
    e.preventDefault()
    handleClick(email, password)
  }

  return (
    <Box>
      <Box>
        <form onSubmit={onSubmitHandler}>
          <Box className={classes.textFieldContainer}>
            <TextField
              id="filled-password-input"
              label={t('auth.email')}
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              autoComplete="current-password"
              InputLabelProps={{
                shrink: true,
              }}
              variant="standard"
              className={classes.textField}
            />
          </Box>
          <Box className={classes.textFieldContainer}>
            <TextField
              id="filled-password-input"
              label={t('auth.password')}
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              autoComplete="current-password"
              InputLabelProps={{
                shrink: true,
              }}
              variant="standard"
              className={classes.textField}
            />
          </Box>
          <Box className={classes.button}>
            <Button
              className={classes.btn}
              variant="contained"
              type="submit"
            >
              {title}
            </Button>
          </Box>
        </form>
      </Box>
    </Box>
  )
}

AuthForm.propTypes = {
  title: pt.string.isRequired,
  handleClick: pt.func.isRequired,
}
