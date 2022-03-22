import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Box } from '@mui/system'
import { makeStyles } from '@mui/styles'

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

const useStyles = makeStyles(theme => ({
  pagination: { display: 'flex', justifyContent: 'flex-end' },
  search: { display: 'flex', justifyContent: 'center' },
}))

export default function Planets () {
  const classes = useStyles()

  const dispatch = useDispatch()
  const { planetsList, page, count, search } = useSelector(store => store.planets)

  useEffect(() => {
    dispatch(planetsRequest(page, search))
    return () => {
      dispatch(planetsRequest(1, ''))
    }
  }, [])

  const handleChange = (event, value) => {
    dispatch(planetsRequest(value, search))
  }

  const onChange = event => {
    dispatch(planetsRequest(1, event.target.value))
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
