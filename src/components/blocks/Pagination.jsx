import React from 'react'
import { Pagination as MuiPagination, Stack } from '@mui/material'
import { makeStyles } from '@mui/styles'
import pt from 'prop-types'

const useStyles = makeStyles(theme => ({
  paginationContainer: {
    spacing: 2,
  },
}))

export default function Pagination ({ handleChange, count }) {
  const classes = useStyles()
  return (
    <Stack className={classes.paginationContainer}>
      <MuiPagination count={count} onChange={handleChange} />
    </Stack>
  )
}

Pagination.propTypes = {
  handleChange: pt.func.isRequired,
  count: pt.number.isRequired,
}
