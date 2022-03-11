import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Box } from '@mui/system'

import TemplateOfCardList from '@/components/blocks/TemplateOfCardList'
import { filmsRequest } from '@/actions'
import { FILMS_IMAGE_URL } from '@/constants'

export default function Films () {
  const dispatch = useDispatch()
  const { filmsList } = useSelector(store => store.films)

  useEffect(() => {
    dispatch(filmsRequest())
  }, [])

  return (
    <Box>
      <TemplateOfCardList data={filmsList} imageUrl={FILMS_IMAGE_URL} />
    </Box>
  )
}
