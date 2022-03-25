import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Box } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { useNavigate } from 'react-router-dom'

import {
  STARSHIPS_IMAGE_URL,
  LIMIT_CARDS_PER_PAGE,
  STARSHIPS_PAGE_PATH,
} from '@/constants'

import TemplateOfCardList from '@/components/blocks/TemplateOfCardList'
import { starshipsRequest } from '@/actions'
import Pagination from '@/components/blocks/Pagination'
import { getCountOfPages } from '@/utils/getCountOfPages'
import { Search } from '@/components/controls/Search'
import { useQueryParams } from '@/utils/useQueryParams'

const useStyles = makeStyles(theme => ({
  pagination: {
    display: 'flex',
    justifyContent: 'flex-end',
    [theme.breakpoints.down('md')]: {
      justifyContent: 'center',
    },
  },
  search: { display: 'flex', justifyContent: 'center', paddingBottom: theme.spacing(3) },
  container: {
    paddingTop: theme.spacing(12),
  },
}))

export default function Starships () {
  const classes = useStyles()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { starshipsList, count } = useSelector(store => store.starships)

  const [search, setSearch] = useState('')
  const [page, setPage] = useState(1)

  const query = useQueryParams()
  const queryPage = query.get('page')
  const querySearch = query.get('search')

  useEffect(() => {
    navigate(`${STARSHIPS_PAGE_PATH}/?page=${page}&search=${search}`)
  }, [page, search])

  useEffect(() => {
    if (querySearch) {
      dispatch(starshipsRequest(1, querySearch))
    } else {
      dispatch(starshipsRequest(queryPage, querySearch))
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
      {count > LIMIT_CARDS_PER_PAGE && (
        <Box className={classes.pagination}>
          <Pagination
            count={getCountOfPages(count)}
            handleChange={handleChange}
          />
        </Box>
      )}
      <TemplateOfCardList
        pathUrl={STARSHIPS_PAGE_PATH}
        data={starshipsList}
        imageUrl={STARSHIPS_IMAGE_URL}
      />
    </Box>
  )
}
