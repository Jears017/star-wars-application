import React from 'react'
import pt from 'prop-types'
import { Box } from '@mui/material'
import { makeStyles } from '@mui/styles'

import Card from '@/components/blocks/Card'
import { getId } from '@/utils/getId'

const useStyles = makeStyles(theme => ({
  itemsList: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
}))

export default function TemplateOfCardList ({ data, imageUrl }) {
  const classes = useStyles()
  return (
    <Box className={classes.itemsList}>
      {data.map(content => {
        return (
          <Card
            key={content.name}
            name={content.name}
            title={content.title}
            imageUrl={`${imageUrl}${getId(content.url)}.jpg`}
            id={getId(content.url)}
          />
        )
      })}
    </Box>
  )
}

TemplateOfCardList.propTypes = {
  data: pt.array.isRequired,
  imageUrl: pt.string.isRequired,
}
