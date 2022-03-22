import React from 'react'
import {
  Pagination as MuiPagination,
  Stack,
  PaginationItem,
} from '@mui/material'
import { Link } from 'react-router-dom'
import { makeStyles } from '@mui/styles'
import pt from 'prop-types'

const useStyles = makeStyles(theme => ({
  paginationContainer: {
    spacing: 2,
  },
}))

export default function Pagination ({ path, count }) {
  const classes = useStyles()
  return (
    <Stack className={classes.paginationContainer}>
      <MuiPagination
        count={count}
        renderItem={item => (
          <PaginationItem
            component={Link}
            to={`${path}/?page=${item.page}&search=`}
            {...item}
          />
        )}
      />
    </Stack>
  )
}

Pagination.propTypes = {
  path: pt.string.isRequired,
  count: pt.number.isRequired,
}
