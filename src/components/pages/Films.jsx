import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Box } from '@mui/system'
import { makeStyles } from '@mui/styles'

import TemplateOfCardList from '@/components/blocks/TemplateOfCardList'
import { filmsRequest } from '@/actions'
import { FILMS_IMAGE_URL } from '@/constants'
import Pagination from '@/components/blocks/Pagination'
import { getCountOfPages } from '@/utils/getCountOfPages'

const useStyles = makeStyles(theme => ({
  pagination: { display: 'flex', justifyContent: 'flex-end' },
}))

export default function Films () {
  const classes = useStyles()

  const dispatch = useDispatch()
  const { filmsList, page, count } = useSelector(store => store.films)

  useEffect(() => {
    dispatch(filmsRequest(page))
  }, [])

  const handleChange = (event, value) => {
    dispatch(filmsRequest(value))
  }

  return (
    <Box>
      <TemplateOfCardList data={filmsList} imageUrl={FILMS_IMAGE_URL} />
      {count > 10 && (
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
