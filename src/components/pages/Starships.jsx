import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Box } from '@mui/system'

import TemplateOfCardList from '@/components/blocks/TemplateOfCardList'
import { starshipsRequest } from '@/actions'
import { STARSHIPS_IMAGE_URL } from '@/constants'

export default function Starships () {
  const dispatch = useDispatch()
  const { starshipsList } = useSelector(store => store.starships)

  useEffect(() => {
    dispatch(starshipsRequest())
  }, [])

  return (
    <Box>
      <TemplateOfCardList data={starshipsList} imageUrl={STARSHIPS_IMAGE_URL} />
    </Box>
  )
}
