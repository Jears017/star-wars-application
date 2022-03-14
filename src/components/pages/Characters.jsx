import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Box } from '@mui/system'
import { makeStyles } from '@mui/styles'

import TemplateOfCardList from '@/components/blocks/TemplateOfCardList'
import { charactersRequest } from '@/actions'
import { CHARACTERS_IMAGE_URL } from '@/constants'
import Pagination from '@/components/blocks/Pagination'
import { getCountOfPages } from '@/utils/getCountOfPages'

const useStyles = makeStyles(theme => ({
  pagination: { display: 'flex', justifyContent: 'flex-end' },
}))

export default function Characters () {
  const classes = useStyles()

  const dispatch = useDispatch()
  const { charactersList, page, count } = useSelector(store => store.characters)

  useEffect(() => {
    dispatch(charactersRequest(page))
  }, [])

  const handleChange = (event, value) => {
    dispatch(charactersRequest(value))
  }

  return (
    <Box>
      <TemplateOfCardList data={charactersList} imageUrl={CHARACTERS_IMAGE_URL} />
      <Box className={classes.pagination}>
        <Pagination
          count={getCountOfPages(count)}
          handleChange={handleChange}
        />
      </Box>
    </Box>
  )
}
