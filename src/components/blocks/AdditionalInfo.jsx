import React, { useEffect, useState } from 'react'
import { Box, Avatar } from '@mui/material'
import { Link } from 'react-router-dom'
import { makeStyles } from '@mui/styles'
import pt from 'prop-types'
import { useTranslation } from 'react-i18next'

import { getId } from '@/utils'
import { ADDITIONAL_INFO_BLOCK_MAX_LENGTH } from '@/constants'

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
    borderRadius: theme.custom.threeBorderRadius,
    backgroundColor: theme.custom.background.main,
    color: theme.palette.text.primary,
    marginTop: theme.spacing(3),
  },
  additionalIconContainer: {
    display: 'flex',
    gap: theme.spacing(3),
    flexWrap: 'wrap',
    paddingTop: theme.spacing(1),
  },
}))

export default function AdditionalInfo ({ data, path, img, title }) {
  const classes = useStyles()
  const { t } = useTranslation()

  const [additionalData, setAdditionalData] = useState([])

  useEffect(() => {
    setAdditionalData(data.slice(0, ADDITIONAL_INFO_BLOCK_MAX_LENGTH))
  }, [data])

  return (
    <Box className={classes.additionalContainer}>
      <Box>{title}</Box>
      <Box className={classes.additionalIconContainer}>
        {additionalData.map(res => (
          <Link key={res} to={`${path}/${getId(res)}`}>
            <Avatar alt={t('common.without_picture')} src={`${img}${getId(res)}.jpg`} />
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
