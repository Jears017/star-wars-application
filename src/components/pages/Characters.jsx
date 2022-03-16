import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Box } from '@mui/system'
import { makeStyles } from '@mui/styles'

import TemplateOfCardList from '@/components/blocks/TemplateOfCardList'
import { charactersRequest } from '@/actions'

import {
  CHARACTERS_IMAGE_URL,
  LIMIT_CARDS_PER_PAGE,
  CHARACTERS_PAGE_PATH,
} from '@/constants'

import Pagination from '@/components/blocks/Pagination'
import { getCountOfPages } from '@/utils/getCountOfPages'
import { Search } from '@/components/controls/Search'

const useStyles = makeStyles(theme => ({
  pagination: { display: 'flex', justifyContent: 'flex-end' },
  search: { display: 'flex', justifyContent: 'center' },
}))

export default function Characters () {
  const classes = useStyles()

  const dispatch = useDispatch()
  const { charactersList, page, count, search } = useSelector(
    store => store.characters,
  )

  useEffect(() => {
    dispatch(charactersRequest(page, search))
  }, [])

  const handleChange = (event, value) => {
    dispatch(charactersRequest(value, search))
  }

  const onChange = event => {
    dispatch(charactersRequest(1, event.target.value))
  }

  return (
    <Box>
      <Box className={classes.search}>
        <Search onSearchChange={onChange} value={search} />
      </Box>
      <TemplateOfCardList
        pathUrl={CHARACTERS_PAGE_PATH}
        data={charactersList}
        imageUrl={CHARACTERS_IMAGE_URL}
      />
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
