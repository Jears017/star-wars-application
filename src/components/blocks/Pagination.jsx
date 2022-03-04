import React from 'react'
import { Pagination as MuiPagination, Stack } from '@mui/material'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles(theme => ({
  paginationContainer: {
    spacing: 2,
  },
}))

export default function Pagination () {
  const classes = useStyles()
  return (
    <Stack className={classes.paginationContainer}>
      <MuiPagination count={10} />
    </Stack>
  )
}
