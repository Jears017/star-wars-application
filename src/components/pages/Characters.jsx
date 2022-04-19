import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Box } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { useHistory } from 'react-router-dom'

import {
  CHARACTERS_IMAGE_URL,
  CARDS_PER_PAGE,
  CHARACTERS_PAGE_PATH,
} from '@/constants'

import TemplateOfCardList from '@/components/blocks/TemplateOfCardList'
import { charactersRequest } from '@/actions'
import Pagination from '@/components/blocks/Pagination'
import { getCountOfPages } from '@/utils/getCountOfPages'
import { Search } from '@/components/controls/Search'
import { useQueryParams } from '@/utils/useQueryParams'
import { Spinner } from '@/components/blocks/Preloader'

const useStyles = makeStyles(theme => ({
  pagination: {
    display: 'flex',
    justifyContent: 'flex-end',
    paddingTop: theme.spacing(1),
    [theme.breakpoints.down('xl')]: {
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

export default function Characters () {
  const classes = useStyles()
  const dispatch = useDispatch()
  const navigate = useHistory()

  const { charactersList, count, isLoading } = useSelector(
    store => store.characters,
  )

  const [search, setSearch] = useState('')
  const [page, setPage] = useState(1)

  const query = useQueryParams()
  const queryPage = query.get('page')
  const querySearch = query.get('search')

  useEffect(() => {
    navigate.push(`${CHARACTERS_PAGE_PATH}/?page=${page}&search=${search}`)
  }, [page, search])

  useEffect(() => {
    if (querySearch) {
      dispatch(charactersRequest(1, querySearch))
    } else {
      dispatch(charactersRequest(queryPage, querySearch))
    }
  }, [queryPage, querySearch])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [page, search])

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
            disabledValue={isLoading}
          />
        </Box>
      )}
      {isLoading
        ? (<Spinner />)
        : (
          <TemplateOfCardList
            pathUrl={CHARACTERS_PAGE_PATH}
            data={charactersList}
            imageUrl={CHARACTERS_IMAGE_URL}
          />
          )}
    </Box>
  )
}
