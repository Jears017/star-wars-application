import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Box } from '@mui/system'
import { makeStyles } from '@mui/styles'

import TemplateOfCardList from '@/components/blocks/TemplateOfCardList'
import { filmsRequest } from '@/actions'
import { FILMS_IMAGE_URL, LIMIT_CARDS_PER_PAGE } from '@/constants'
import Pagination from '@/components/blocks/Pagination'
import { getCountOfPages } from '@/utils/getCountOfPages'
import { Search } from '@/components/controls/Search'

const useStyles = makeStyles(theme => ({
  pagination: { display: 'flex', justifyContent: 'flex-end' },
  search: { display: 'flex', justifyContent: 'center' },
}))

export default function Films () {
  const classes = useStyles()

  const dispatch = useDispatch()
  const { filmsList, page, count, search } = useSelector(store => store.films)

  useEffect(() => {
    dispatch(filmsRequest(page, search))
  }, [])

  const handleChange = (event, value) => {
    dispatch(filmsRequest(value))
  }

  const onChange = event => {
    dispatch(filmsRequest(1, event.target.value))
  }

  return (
    <Box>
      <Box className={classes.search}>
        <Search onSearchChange={onChange} value={search}/>
      </Box>
      <TemplateOfCardList data={filmsList} imageUrl={FILMS_IMAGE_URL} />
      {count > LIMIT_CARDS_PER_PAGE && (
        <Box className={classes.pagination}>
          <Pagination
            count={getCountOfPages(count)}
            handleChange={handleChange}
          />
        </Box>
      )}
    </Box>
  )
}
