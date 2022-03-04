import React from 'react'
import { Pagination, Stack } from '@mui/material'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles(theme => ({
  paginationContainer: {
    spacing: 2,
  },
}))

export default function PaginationComponent () {
  const classes = useStyles()
  return (
    <Stack className={classes.paginationContainer}>
      <Pagination count={10} />
    </Stack>
  )
}
