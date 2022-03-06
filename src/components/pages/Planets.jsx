import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Box } from '@mui/system'

import { getPlanets } from '@/actions/planets'
import { PLANETS_IMAGE_URL } from '@/constants'
import TemplateOfCardList from '@/components/blocks/TemplateOfCardList'

export default function Planets () {
  const dispatch = useDispatch()
  const { planetsList } = useSelector(store => store.planets)
  useEffect(() => {
    dispatch(getPlanets())
  }, [])
  return (
    <Box>
      <TemplateOfCardList data={planetsList} imageUrl={PLANETS_IMAGE_URL} />
    </Box>
  )
}
