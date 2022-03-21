import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Box } from '@mui/system'
import { makeStyles } from '@mui/styles'

import TemplateOfCardList from '@/components/blocks/TemplateOfCardList'
import { starshipsRequest } from '@/actions'

import {
  STARSHIPS_IMAGE_URL,
  LIMIT_CARDS_PER_PAGE,
  STARSHIPS_PAGE_PATH,
} from '@/constants'

import Pagination from '@/components/blocks/Pagination'
import { getCountOfPages } from '@/utils/getCountOfPages'
import { Search } from '@/components/controls/Search'

const useStyles = makeStyles(theme => ({
  pagination: { display: 'flex', justifyContent: 'flex-end' },
  search: { display: 'flex', justifyContent: 'center' },
}))

export default function Starships () {
  const classes = useStyles()

  const dispatch = useDispatch()
  const { starshipsList, page, count, search } = useSelector(
    store => store.starships,
  )

  useEffect(() => {
    dispatch(starshipsRequest(page, search))
  }, [])

  const handleChange = (event, value) => {
    dispatch(starshipsRequest(value, search))
  }

  const onChange = event => {
    dispatch(starshipsRequest(1, event.target.value))
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
        pathUrl={STARSHIPS_PAGE_PATH}
        data={starshipsList}
        imageUrl={STARSHIPS_IMAGE_URL}
      />
    </Box>
  )
}
