import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Box } from '@mui/system'
import { makeStyles } from '@mui/styles'

import { PLANETS_IMAGE_URL } from '@/constants'
import TemplateOfCardList from '@/components/blocks/TemplateOfCardList'
import { planetsRequest } from '@/actions/planets'
import Pagination from '@/components/blocks/Pagination'
import { getCountOfPages } from '@/utils/getCountOfPages'

const useStyles = makeStyles(theme => ({
  pagination: { display: 'flex', justifyContent: 'flex-end' },
}))

export default function Planets () {
  const classes = useStyles()

  const dispatch = useDispatch()
  const { planetsList, page, count } = useSelector(store => store.planets)

  useEffect(() => {
    dispatch(planetsRequest(page))
  }, [])

  const handleChange = (event, value) => {
    dispatch(planetsRequest(value))
  }

  return (
    <Box>
      <TemplateOfCardList data={planetsList} imageUrl={PLANETS_IMAGE_URL} />
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
