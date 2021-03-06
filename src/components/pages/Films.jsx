import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Box } from '@mui/system'
import { makeStyles } from '@mui/styles'
import { useHistory } from 'react-router-dom'

import {
  FILMS_IMAGE_URL,
  CARDS_PER_PAGE,
  FILMS_PAGE_PATH,
} from '@/constants'

import TemplateOfCardList from '@/components/blocks/TemplateOfCardList'
import { filmsRequest } from '@/actions'
import Pagination from '@/components/blocks/Pagination'
import { getCountOfPages } from '@/utils/getCountOfPages'
import { Search } from '@/components/controls/Search'
import { useQueryParams } from '@/utils/useQueryParams'
import { Spinner } from '@/components/blocks/Preloader'

const useStyles = makeStyles(theme => ({
  pagination: {
    display: 'flex',
    justifyContent: 'flex-end',
    [theme.breakpoints.down('md')]: {
      justifyContent: 'center',
    },
  },
  search: {
    display: 'flex',
    justifyContent: 'center',
    paddingBottom: theme.spacing(4),
  },
  container: {
    paddingTop: theme.spacing(12),
  },
}))

export default function Films () {
  const classes = useStyles()
  const dispatch = useDispatch()
  const navigate = useHistory()

  const { filmsList, count, isLoading } = useSelector(store => store.films)

  const [search, setSearch] = useState('')
  const [page, setPage] = useState(1)

  const query = useQueryParams()
  const queryPage = query.get('page')
  const querySearch = query.get('search')

  useEffect(() => {
    navigate.push(`${FILMS_PAGE_PATH}/?page=${page}&search=${search}`)
  }, [page, search])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [page, search])

  useEffect(() => {
    if (querySearch) {
      dispatch(filmsRequest(1, querySearch))
    } else {
      dispatch(filmsRequest(queryPage, querySearch))
    }
  }, [queryPage, querySearch])

  const handleChange = (event, value) => {
    setPage(value)
  }

  const onChange = event => {
    setSearch(event.target.value)
  }

  return (
    <Box className={classes.container}>
      <Box className={classes.search}>
        <Search onSearchChange={onChange} value={search} />
      </Box>
      {count > CARDS_PER_PAGE && (
        <Box className={classes.pagination}>
          <Pagination
            count={getCountOfPages(count)}
            handleChange={handleChange}
          />
        </Box>
      )}
      {isLoading
        ? (<Spinner />)
        : (
        <Box>
          <TemplateOfCardList
            pathUrl={FILMS_PAGE_PATH}
            data={filmsList}
            imageUrl={FILMS_IMAGE_URL}
          />
        </Box>
          )}
    </Box>
  )
}
