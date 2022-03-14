import React from 'react'
import { Box, InputAdornment, TextField } from '@mui/material'
import { makeStyles } from '@mui/styles'
import SearchIcon from '@mui/icons-material/Search'
import pt from 'prop-types'

const useStyles = makeStyles(theme =>
  ({
    searchField: {
      m: 1, width: 500,
    },
  }),
)

export function Search ({ onSearchChange, value }) {
  const classes = useStyles()
  return (
    <Box>
      <TextField
        size="small"
        id="outlined-start-adornment"
        className={classes.searchField}
        value={value}
        onChange={onSearchChange}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      >
        Enter something
      </TextField>
    </Box>
  )
}

Search.propTypes = {
  onSearchChange: pt.func.isRequired,
  value: pt.string.isRequired,
}
