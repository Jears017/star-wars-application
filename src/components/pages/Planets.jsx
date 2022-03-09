import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Box } from '@mui/system'

import { PLANETS_IMAGE_URL } from '@/constants'
import TemplateOfCardList from '@/components/blocks/TemplateOfCardList'
import { planetsRequest } from '@/actions/planets'

export default function Planets () {
  const dispatch = useDispatch()
  const { planetsList } = useSelector(store => store.planets)

  useEffect(() => {
    dispatch(planetsRequest())
  }, [])

  return (
    <Box>
      <TemplateOfCardList data={planetsList} imageUrl={PLANETS_IMAGE_URL} />
    </Box>
  )
}
