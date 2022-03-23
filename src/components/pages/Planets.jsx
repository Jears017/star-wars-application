import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Box } from '@mui/system'
import { makeStyles } from '@mui/styles'
import { useNavigate } from 'react-router-dom'

import {
  PLANETS_IMAGE_URL,
  LIMIT_CARDS_PER_PAGE,
  PLANETS_PAGE_PATH,
} from '@/constants'

import TemplateOfCardList from '@/components/blocks/TemplateOfCardList'
import { planetsRequest } from '@/actions/planets'
import Pagination from '@/components/blocks/Pagination'
import { getCountOfPages } from '@/utils/getCountOfPages'
import { Search } from '@/components/controls/Search'
import { useQueryParams } from '@/utils/useQueryParams'

const useStyles = makeStyles(theme => ({
  pagination: { display: 'flex', justifyContent: 'flex-end' },
  search: { display: 'flex', justifyContent: 'center' },
}))

export default function Planets () {
  const classes = useStyles()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [search, setSearch] = useState('')
  const [page, setPage] = useState(1)

  const { planetsList, count } = useSelector(store => store.planets)

  const query = useQueryParams()
  const queryPage = query.get('page')
  const querySearch = query.get('search')

  useEffect(() => {
    navigate(`/planets/?page=${page}&search=${search}`)
  }, [page, search])

  useEffect(() => {
    dispatch(planetsRequest(queryPage, search))
  }, [queryPage, querySearch])

  const handleChange = (event, value) => {
    setPage(value)
  }

  const onChange = event => {
    setSearch(event.target.value)
  }

  return (
    <Box>
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
        pathUrl={PLANETS_PAGE_PATH}
        data={planetsList}
        imageUrl={PLANETS_IMAGE_URL}
      />
    </Box>
  )
}
