import React from 'react'
import { Box, Avatar } from '@mui/material'
import { Link } from 'react-router-dom'
import { makeStyles } from '@mui/styles'
import pt from 'prop-types'

import { getId } from '@/utils'

const useStyles = makeStyles(theme => ({
  additionalContainer: {
    width: 450,
    minHeight: 200,
    [theme.breakpoints.down('md')]: {
      width: 370,
    },
    [theme.breakpoints.down('sm')]: {
      width: 320,
    },
    border: `1px solid ${theme.palette.common.black}`,
    borderRadius: theme.custom.threeBorderRadius,
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.common.white,
  },
  additionalIconContainer: { display: 'flex', gap: 24, flexWrap: 'wrap' },
}))

export default function AdditionalInfo ({ data, path, img, title }) {
  const classes = useStyles()

  return (
    <Box className={classes.additionalContainer}>
      <Box>{title}</Box>
      <Box className={classes.additionalIconContainer}>
        {data.map(res => (
          <Link key={res} to={`${path}/${getId(res)}`}>
            <Avatar alt="Remy Sharp" src={`${img}${getId(res)}.jpg`} />
          </Link>
        ))}
      </Box>
    </Box>
  )
}

AdditionalInfo.propTypes = {
  data: pt.array.isRequired,
  path: pt.string.isRequired,
  img: pt.string.isRequired,
  title: pt.string.isRequired,
}
