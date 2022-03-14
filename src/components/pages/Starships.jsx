import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Box } from '@mui/system'
import { makeStyles } from '@mui/styles'

import TemplateOfCardList from '@/components/blocks/TemplateOfCardList'
import { starshipsRequest } from '@/actions'
import { STARSHIPS_IMAGE_URL, LIMIT_CARDS_PER_PAGE } from '@/constants'
import Pagination from '@/components/blocks/Pagination'
import { getCountOfPages } from '@/utils/getCountOfPages'

const useStyles = makeStyles(theme => ({
  pagination: { display: 'flex', justifyContent: 'flex-end' },
}))

export default function Starships () {
  const classes = useStyles()

  const dispatch = useDispatch()
  const { starshipsList, page, count } = useSelector(store => store.starships)

  useEffect(() => {
    dispatch(starshipsRequest(page))
  }, [])

  const handleChange = (event, value) => {
    dispatch(starshipsRequest(value))
  }

  return (
    <Box>
      <TemplateOfCardList data={starshipsList} imageUrl={STARSHIPS_IMAGE_URL} />
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
