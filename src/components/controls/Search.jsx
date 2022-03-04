import React from 'react'
import { Box, InputAdornment, TextField } from '@mui/material'
import { makeStyles } from '@mui/styles'
import SearchIcon from '@mui/icons-material/Search'

const useStyles = makeStyles(theme =>
  ({
    searchField: {
      m: 1, width: 500,
    },
  }),
)

export function Search () {
  const classes = useStyles()
  return (
    <Box>
      <TextField
        size="small"
        id="outlined-start-adornment"
        className={classes.searchField}
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
