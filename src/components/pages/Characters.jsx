import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Box } from '@mui/system'

import TemplateOfCardList from '@/components/blocks/TemplateOfCardList'
import { charactersRequest } from '@/actions'
import { CHARACTERS_IMAGE_URL } from '@/constants'

export default function Characters () {
  const dispatch = useDispatch()
  const { charactersList } = useSelector(store => store.characters)

  useEffect(() => {
    dispatch(charactersRequest())
  }, [])

  return (
    <Box>
      <TemplateOfCardList data={charactersList} imageUrl={CHARACTERS_IMAGE_URL} />
    </Box>
  )
}
