import React from 'react'
import pt from 'prop-types'
import { Box } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { Link } from 'react-router-dom'

import Card from '@/components/blocks/Card'
import { getId } from '@/utils/getId'

const useStyles = makeStyles(theme => ({
  itemsList: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '23px',
    justifyContent: 'center',
    paddingTop: theme.spacing(3),
  },
  cardLink: {
    textDecoration: 'none',
    color: theme.palette.text.primary,
  },
}))

export default function TemplateOfCardList ({ data, imageUrl, pathUrl }) {
  const classes = useStyles()
  return (
    <Box className={classes.itemsList}>
      {data.map(content => {
        return (
          <Link
            key={content.name}
            className={classes.cardLink}
            to={`${pathUrl}/${getId(content.url)}`}
          >
            <Card
              name={content.name}
              title={content.title}
              imageUrl={`${imageUrl}${getId(content.url)}.jpg`}
              id={getId(content.url)}
              pathUrl={pathUrl}
            />
          </Link>
        )
      })}
    </Box>
  )
}

TemplateOfCardList.propTypes = {
  data: pt.array.isRequired,
  imageUrl: pt.string.isRequired,
  pathUrl: pt.string.isRequired,
}
