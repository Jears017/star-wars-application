import React, { useState } from 'react'
import { Box, Button, TextField } from '@mui/material'
import pt from 'prop-types'
import { makeStyles } from '@mui/styles'
import { useTranslation } from 'react-i18next'

const useStyles = makeStyles(theme => ({
  textFieldContainer: {
    marginTop: theme.spacing(3),
  },
  textField: {
    minWidth: '400px',
  },
  button: {
    marginTop: theme.spacing(3),
  },
}))

export const Form = ({ title, handleClick }) => {
  const classes = useStyles()
  const { t } = useTranslation()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <Box>
      <Box>
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
          <Button onClick={() => handleClick(email, password)}>{title}</Button>
        </Box>
      </Box>
    </Box>
  )
}

Form.propTypes = {
  title: pt.string.isRequired,
  handleClick: pt.func.isRequired,
}
