import React from 'react'
import { InputAdornment, TextField } from '@mui/material'
import { makeStyles } from '@mui/styles'
import SearchIcon from '@mui/icons-material/Search'
import pt from 'prop-types'

const useStyles = makeStyles(theme => ({
  searchField: {
    width: '40%',
    [theme.breakpoints.down('lg')]: {
      width: '60%',
    },
  },
}))

export function Search ({ onSearchChange, value }) {
  const classes = useStyles()
  return (
    <TextField
      size="small"
      id="outlined-start-adornment"
      className={classes.searchField}
      value={value}
      onChange={onSearchChange}
      placeholder={'Search...'}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
    >
    </TextField>
  )
}

Search.propTypes = {
  onSearchChange: pt.func.isRequired,
  value: pt.string.isRequired,
}
