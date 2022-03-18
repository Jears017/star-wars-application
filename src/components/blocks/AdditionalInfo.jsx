import React from 'react'
import { Box, Avatar } from '@mui/material'
import { Link } from 'react-router-dom'
import { makeStyles } from '@mui/styles'
import pt from 'prop-types'

import { getId } from '@/utils'

const useStyles = makeStyles(theme => ({
  additionalContainer: {
    width: 400,
    height: 200,
    border: `1px solid ${theme.palette.common.black}`,
    borderRadius: '5%',
  },
  additionalIconContainer: { display: 'flex', gap: 24 },
}))

export default function AdditionalInfo ({ data, path, img, title }) {
  const classes = useStyles()

  return (
    <Box className={classes.additionalContainer}>
      <Box>{title}</Box>
      <Box className={classes.additionalIconContainer}>
        {data.map(res => (
          <Link key={res} to={`${path}/${getId(res)}`}>
          <Avatar
            alt="Remy Sharp"
            src={`${img}${getId(
              res,
            )}.jpg`}
          />
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
